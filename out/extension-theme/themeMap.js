"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolveColors_1 = require("../utils/resolveColors");
const resolveSpacing_1 = require("../utils/resolveSpacing");
const resolveTypography_1 = require("../utils/resolveTypography");
const resolveSizing_1 = require("../utils/resolveSizing");
const resolveRadius_1 = require("../utils/resolveRadius");
const resolveShadows_1 = require("../utils/resolveShadows");
const resolveBorders_1 = require("../utils/resolveBorders");
const themeMap = {
    color: resolveColors_1.default,
    typography: resolveTypography_1.default,
    sizing: resolveSizing_1.default,
    shadow: resolveShadows_1.default,
    border: resolveBorders_1.default,
    radius: resolveRadius_1.default,
    spacing: resolveSpacing_1.default,
};
exports.default = themeMap;
//# sourceMappingURL=themeMap.js.map