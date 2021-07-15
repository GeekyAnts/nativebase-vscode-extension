import * as vscode from 'vscode';

import propMap from './config/propMap';
import themeMap from './config/themeMap';
import getValidProp from './utils/getValidProp';
import convertToCompletionItems from './utils/convertToCompletionItems';

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
  const suggestionsProvider = vscode.languages.registerCompletionItemProvider(
    document_selector,
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
      ) {
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
