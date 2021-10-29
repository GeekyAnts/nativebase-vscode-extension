import * as vscode from 'vscode';

import propMap from './config/propMap';
import themeMap from './config/themeMap';
import getValidProp from './utils/getValidProp';
import convertToCompletionItems from './utils/convertToCompletionItems';
import getValidWorkspaceFolders from './utils/getValidWorkspaceFolders';
import checkNativeBaseImported from './utils/checkNativeBaseImported';
import extendTheme from './utils/extendTheme';

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

  //todo- save only when theme.js or theme.ts is saved
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

        //returns the text that is written
        const linePrefix = document
          .lineAt(position)
          .text.substr(0, position.character);

        //find the valid propObject from the linePrefix. isWrapped differs bw bg= and bg=""
        const validPropObj: {
          isWrapped: boolean;
          validProp: string;
        } = getValidProp(linePrefix);

        //get themKey corresponding to the prop
        const themeMapKey = hasKey(propMap, validPropObj.validProp)
          ? propMap[validPropObj.validProp]
          : undefined;

        //get the resolver function corresponding to theme key
        const propResolverFunction =
          themeMapKey && hasKey(themeMap, themeMapKey)
            ? themeMap[themeMapKey]
            : undefined;

        if (propResolverFunction) {
          //get the suggestion list from the resolver function
          let suggestionsList: object[] = propResolverFunction(
            validPropObj.validProp
          );

          //convert the suggestions list to vscode-completion items
          const completionItems = convertToCompletionItems(
            suggestionsList,
            validPropObj.validProp,
            validPropObj.isWrapped
          );
          return completionItems;
        }
        return undefined;
      },
    },
    //triggering characters
    '=',
    `"`,
    `'`
  );

  context.subscriptions.push(suggestionsProvider);
}
