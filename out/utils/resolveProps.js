"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPropValid = (linePrefix, prop) => {
    if (linePrefix.endsWith(prop + '=') &&
        linePrefix.length - prop.length - 2 > 0 &&
        linePrefix.charAt(linePrefix.length - prop.length - 2) === ' ')
        return true;
    return false;
};
const resolveProps = (linePrefix, validProps, customFn) => {
    let items = [];
    let propFound = false;
    for (let i = 0; i < validProps.length; i++) {
        if (isPropValid(linePrefix, validProps[i])) {
            propFound = true;
            items = customFn(validProps[i]);
        }
    }
    if (!propFound)
        return undefined;
    return items;
};
exports.default = resolveProps;
//# sourceMappingURL=resolveProps.js.map