import * as vscode from 'vscode';

import propMap from './config/propMap';
import themeMap from './config/themeMap';
import getValidProp from './utils/getValidProp';
import convertToCompletionItems from './utils/convertToCompletionItems';
import getValidWorkspaceFolders from './utils/getValidWorkspaceFolders';
import checkNativeBaseImported from './utils/checkNativeBaseImported';
import extendTheme from './utils/extendTheme';
import { ifError } from 'assert';

function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj;
}

export function activate(context: vscode.ExtensionContext) {
  const document_selector = <vscode.DocumentSelector>[
    { language: 'javascript' },
    { language: 'typescript' },
    { language: 'javascriptreact' },
    { language: 'typescriptreact' },
  ];

  //get valid workspaces
  const validWorkspaces = getValidWorkspaceFolders();
  extendTheme();

  vscode.workspace.onDidSaveTextDocument(() => {
    extendTheme();
  });

  const suggestionsProvider = vscode.languages.registerCompletionItemProvider(
    document_selector,
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
      ) {
        //check if nb is imported in the file
        if (validWorkspaces.length === 0 || !checkNativeBaseImported())
          return undefined;

        //check currentFile is present in valid workspace
        const fileName = vscode.window.activeTextEditor?.document.fileName;
        const projectName = vscode.workspace.workspaceFolders
          ?.map((folder) => folder.uri.fsPath)
          .filter((fsPath) => fileName?.startsWith(fsPath))[0];

        if (!validWorkspaces.includes(projectName)) return undefined;

        const linePrefix = document
          .lineAt(position)
          .text.substr(0, position.character);

        const validProp = getValidProp(linePrefix);

        if (hasKey(propMap, validProp)) {
          const themeMapKey = propMap[validProp];

          if (hasKey(themeMap, themeMapKey)) {
            const propResolverFunction = themeMap[themeMapKey];

            let suggestionsList: object[] | undefined = propResolverFunction(
              validProp
            );

            if (suggestionsList === undefined) return undefined;

            const completionItems = convertToCompletionItems(
              suggestionsList,
              validProp
            );
            return completionItems;
          }
          return undefined;
        }
        return undefined;
      },
    },
    '='
  );

  context.subscriptions.push(suggestionsProvider);
}
