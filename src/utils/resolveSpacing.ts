import { spacing } from '../theme/space';
import { extendThemeObject } from '../utils/extendTheme';
const _ = require('lodash');
const resolveSpacing = () => {
  const sizesObj: object = _.merge(spacing, extendThemeObject.space);
  const validSpacing: object[] = [];
  for (const [key, value] of Object.entries(sizesObj)) {
    const spacingObj = {
      name: key,
      value: value,
    };
    validSpacing.push(spacingObj);
  }
  return validSpacing;
};
export default resolveSpacing;
