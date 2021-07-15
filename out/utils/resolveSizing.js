"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sizes_1 = require("../theme/sizes");
const resolveSizing = () => {
    const validSizing = [];
    for (const [key, value] of Object.entries(sizes_1.default)) {
        const sizeObj = {
            name: key,
            value: key === 'container' ? '' : value,
        };
        validSizing.push(sizeObj);
    }
    return validSizing;
};
exports.default = resolveSizing;
//# sourceMappingURL=resolveSizing.js.map