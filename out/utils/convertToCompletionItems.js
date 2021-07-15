"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const convertToCompletionItems = (suggestionsList, validProp) => {
    const completionItems = suggestionsList.map((item, index) => {
        const colorProps = [
            'color',
            'bg',
            'borderColor',
            'borderTopColor',
            'borderRightColor',
            'borderBottomColor',
            'borderLeftColor',
        ];
        const completionItem = new vscode.CompletionItem(item.name, colorProps.includes(validProp)
            ? vscode.CompletionItemKind.Color
            : vscode.CompletionItemKind.Value);
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
exports.default = convertToCompletionItems;
//# sourceMappingURL=convertToCompletionItems.js.map