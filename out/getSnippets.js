"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const getSnippets = (items) => {
    const snippets = items.map((item, index) => {
        const snippet = new vscode.CompletionItem(item, vscode.CompletionItemKind.Value);
        snippet.label = item;
        snippet.insertText = `"${item}"`;
        snippet.sortText = String.fromCharCode(97 + index);
        return snippet;
    });
    return snippets;
};
exports.default = getSnippets;
//# sourceMappingURL=getSnippets.js.map