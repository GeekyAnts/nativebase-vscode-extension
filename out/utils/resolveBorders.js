"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const borders_1 = require("../theme/borders");
const resolveBorders = () => {
    const validBorders = [];
    for (const [key, value] of Object.entries(borders_1.default)) {
        const borderObj = {
            name: key,
            value: value,
        };
        validBorders.push(borderObj);
    }
    return validBorders;
};
exports.default = resolveBorders;
//# sourceMappingURL=resolveBorders.js.map