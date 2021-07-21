import colors from '../theme/colors';
const _ = require('lodash');
import { extendThemeObject } from '../utils/extendTheme';
const resolveColors = () => {
  const colorsObj: object = _.merge(colors, extendThemeObject.colors);
  const validColors: object[] = [];
  for (const [colorName, value] of Object.entries(colorsObj)) {
    if (colorName === 'contrastThreshold') continue;
    if (typeof value === 'object') {
      for (const [colorValue, rgb] of Object.entries(value)) {
        const colorObj = {
          name: colorName + '.' + colorValue,
          value: rgb,
        };
        validColors.push(colorObj);
      }
    } else {
      const colorObj = {
        name: colorName,
        value: value,
      };
      validColors.push(colorObj);
    }
  }
  return validColors;
};
export default resolveColors;
