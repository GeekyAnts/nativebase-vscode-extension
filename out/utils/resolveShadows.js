"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shadows_1 = require("../theme/shadows");
const resolveShadows = () => {
    const shadowObj = shadows_1.default();
    const validShadows = [];
    for (const [key, value] of Object.entries(shadowObj)) {
        const shadowObj = {
            name: key,
            value: '',
        };
        validShadows.push(shadowObj);
    }
    return validShadows;
};
exports.default = resolveShadows;
//# sourceMappingURL=resolveShadows.js.map