"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = require("../theme/colors");
const resolveColors = () => {
    const validColors = [];
    for (const [colorName, value] of Object.entries(colors_1.default)) {
        if (colorName === 'contrastThreshold')
            continue;
        if (typeof value === 'object') {
            for (const [colorValue, rgb] of Object.entries(value)) {
                const colorObj = {
                    name: colorName + '.' + colorValue,
                    value: rgb,
                };
                validColors.push(colorObj);
            }
        }
        else {
            const colorObj = {
                name: colorName,
                value: value,
            };
            validColors.push(colorObj);
        }
    }
    return validColors;
};
exports.default = resolveColors;
//# sourceMappingURL=resolveColors.js.map