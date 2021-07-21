import sizes from '../theme/sizes';
import { extendThemeObject } from '../utils/extendTheme';
const _ = require('lodash');
const resolveSizing = () => {
  const sizesObj: object = _.merge(sizes, extendThemeObject.sizes);
  const validSizing: object[] = [];
  for (const [key, value] of Object.entries(sizesObj)) {
    const sizeObj = {
      name: key,
      value: key === 'container' ? '' : value,
    };
    validSizing.push(sizeObj);
  }
  return validSizing;
};
export default resolveSizing;
