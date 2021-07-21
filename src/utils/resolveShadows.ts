import shadows from '../theme/shadows';
import { extendThemeObject } from '../utils/extendTheme';
const _ = require('lodash');
const resolveShadows = () => {
  const shadowObj = shadows();
  const shadowExtendedObject: object = _.merge(
    shadowObj,
    extendThemeObject.shadows
  );
  const validShadows: object[] = [];
  for (const [key, value] of Object.entries(shadowExtendedObject)) {
    const shadowObj = {
      name: key,
      value: '',
    };
    validShadows.push(shadowObj);
  }
  return validShadows;
};
export default resolveShadows;
