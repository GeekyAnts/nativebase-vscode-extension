"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const radius_1 = require("../theme/radius");
const resolveRadius = () => {
    const validRadius = [];
    for (const [key, value] of Object.entries(radius_1.default)) {
        const radiusObject = {
            name: key,
            value: value,
        };
        validRadius.push(radiusObject);
    }
    return validRadius;
};
exports.default = resolveRadius;
//# sourceMappingURL=resolveRadius.js.map