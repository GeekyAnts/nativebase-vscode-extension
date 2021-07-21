import typography from '../theme/typography';
import { extendThemeObject } from '../utils/extendTheme';
const _ = require('lodash');
function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj;
}
const resolveTypography = (prop: string) => {
  const validTypography: object[] = [];
  const convertedProp: string = prop + 's';
  if (hasKey(typography, convertedProp)) {
    const typographyObject: any = _.merge(typography, extendThemeObject);
    for (const [key, value] of Object.entries(
      typographyObject[convertedProp]
    )) {
      const typographyObj = {
        name: key,
        value: value,
      };
      validTypography.push(typographyObj);
    }
    return validTypography;
  }
  return [];
};
export default resolveTypography;
