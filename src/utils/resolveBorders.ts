import borders from '../theme/borders';
import { extendThemeObject } from '../utils/extendTheme';
const _ = require('lodash');
const resolveBorders = (prop: string) => {
  const borderObj: object = _.merge(borders, extendThemeObject.border);
  const validBorders: object[] = [];
  for (const [key, value] of Object.entries(borderObj)) {
    const borderObj = {
      name: key,
      value: value,
    };
    validBorders.push(borderObj);
  }
  return validBorders;
};
export default resolveBorders;
