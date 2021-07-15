"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const convertToCompletionItems = (items) => {
    const snippets = items.map((item, index) => {
        const snippet = new vscode.CompletionItem(item, vscode.CompletionItemKind.Value);
        snippet.label = item.name;
        snippet.insertText = `"${item.name}"`;
        snippet.detail = item.value.toString();
        snippet.sortText = String.fromCharCode(97 + index);
        return snippet;
    });
    return snippets;
};
exports.default = convertToCompletionItems;
//# sourceMappingURL=getSnippets.js.map