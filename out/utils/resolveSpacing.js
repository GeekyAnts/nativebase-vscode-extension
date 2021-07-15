"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const space_1 = require("../theme/space");
const resolveSpacing = () => {
    const validSpacing = [];
    for (const [key, value] of Object.entries(space_1.spacing)) {
        const spacingObj = {
            name: key,
            value: value,
        };
        validSpacing.push(spacingObj);
    }
    return validSpacing;
};
exports.default = resolveSpacing;
//# sourceMappingURL=resolveSpacing.js.map