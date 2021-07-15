"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nativeBaseProps_1 = require("../theme/nativeBaseProps");
const isPropValid = (linePrefix, prop) => {
    if (linePrefix.endsWith(prop + '=') &&
        linePrefix.length - prop.length - 2 > 0 &&
        linePrefix.charAt(linePrefix.length - prop.length - 2) === ' ')
        return true;
    return false;
};
const getValidProp = (linePrefix) => {
    for (let i = 0; i < nativeBaseProps_1.nativeBaseProps.length; i++) {
        if (isPropValid(linePrefix, nativeBaseProps_1.nativeBaseProps[i])) {
            return nativeBaseProps_1.nativeBaseProps[i];
        }
    }
    return '';
};
exports.default = getValidProp;
//# sourceMappingURL=getValidProp.js.map