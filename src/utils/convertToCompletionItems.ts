import * as vscode from 'vscode';

const convertToCompletionItems = (suggestionsList: any, validProp: string) => {
  const completionItems = suggestionsList.map((item: any, index: number) => {
    const colorProps = [
      'color',
      'bg',
      'borderColor',
      'borderTopColor',
      'borderRightColor',
      'borderBottomColor',
      'borderLeftColor',
    ];
    const completionItem = new vscode.CompletionItem(
      item.name,
      colorProps.includes(validProp)
        ? vscode.CompletionItemKind.Color
        : vscode.CompletionItemKind.Value
    );

    completionItem.label = item.name;
    completionItem.insertText = `"${item.name}"`;
    completionItem.detail = item.value.toString();
    completionItem.documentation = colorProps.includes(validProp)
      ? item.value.toString()
      : '';
    completionItem.sortText = String.fromCharCode(97 + index);
    return completionItem;
  });

  return completionItems;
};

export default convertToCompletionItems;
