"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const borders_1 = require("../theme/borders");
const resolveBorders = () => {
    const validBorders = [];
    for (const [key] of Object.entries(borders_1.default)) {
        validBorders.push(key);
    }
    return validBorders;
};
exports.default = resolveBorders;
//# sourceMappingURL=resolveBorder.js.map