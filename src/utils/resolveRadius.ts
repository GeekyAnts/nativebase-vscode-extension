import radii from '../theme/radius';
import { extendThemeObject } from '../utils/extendTheme';
const _ = require('lodash');
const resolveRadius = () => {
  const radiussObj: object = _.merge(radii, extendThemeObject.radii);
  const validRadius: object[] = [];
  for (const [key, value] of Object.entries(radiussObj)) {
    const radiusObject = {
      name: key,
      value: value,
    };
    validRadius.push(radiusObject);
  }
  return validRadius;
};
export default resolveRadius;
