"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typography_1 = require("../theme/typography");
function hasKey(obj, key) {
    return key in obj;
}
const resolveTypography = (prop) => {
    const validTypography = [];
    const convertedProp = prop + 's';
    if (hasKey(typography_1.default, convertedProp)) {
        for (const [key, value] of Object.entries(typography_1.default[convertedProp])) {
            const typographyObj = {
                name: key,
                value: value,
            };
            validTypography.push(typographyObj);
        }
        return validTypography;
    }
    return [];
};
exports.default = resolveTypography;
//# sourceMappingURL=resolveTypography.js.map