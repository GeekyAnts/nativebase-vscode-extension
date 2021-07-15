"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typography_1 = require("../theme/typography");
function hasKey(obj, key) {
    return key in obj;
}
const resolvedTypography = (prop) => {
    const validFontWeights = [];
    const convertedProp = prop + 's';
    if (hasKey(typography_1.default, convertedProp)) {
        for (const [key] of Object.entries(typography_1.default[convertedProp])) {
            validFontWeights.push(key);
        }
        return validFontWeights;
    }
    return [];
};
exports.default = resolvedTypography;
//# sourceMappingURL=resolveFontWeights.js.map