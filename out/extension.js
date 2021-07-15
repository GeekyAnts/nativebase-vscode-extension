"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const propMap_1 = require("./config/propMap");
const themeMap_1 = require("./config/themeMap");
const getValidProp_1 = require("./utils/getValidProp");
const convertToCompletionItems_1 = require("./utils/convertToCompletionItems");
function hasKey(obj, key) {
    return key in obj;
}
function activate(context) {
    const document_selector = [
        { language: 'javascript' },
        { language: 'typescript' },
        { language: 'javascriptreact' },
        { language: 'typescriptreact' },
    ];
    const suggestionsProvider = vscode.languages.registerCompletionItemProvider(document_selector, {
        provideCompletionItems(document, position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            const validProp = getValidProp_1.default(linePrefix);
            if (hasKey(propMap_1.default, validProp)) {
                const themeMapKey = propMap_1.default[validProp];
                if (hasKey(themeMap_1.default, themeMapKey)) {
                    const propResolverFunction = themeMap_1.default[themeMapKey];
                    let suggestionsList = propResolverFunction(validProp);
                    if (suggestionsList === undefined)
                        return undefined;
                    const completionItems = convertToCompletionItems_1.default(suggestionsList, validProp);
                    return completionItems;
                }
                return undefined;
            }
            return undefined;
        },
    }, '=');
    context.subscriptions.push(suggestionsProvider);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map