"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const space_1 = require("./space");
const container = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
};
const sizes = {
    ...space_1.spacing,
    ...{
        '3xs': '224px',
        '2xs': '256px',
        xs: '320px',
        sm: '384px',
        md: '448px',
        lg: '512px',
        xl: '576px',
        '2xl': '672px',
    },
    container,
};
exports.default = sizes;
//# sourceMappingURL=sizes.js.map