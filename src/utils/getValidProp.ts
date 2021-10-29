import { nativeBaseProps } from '../theme/nativeBaseProps';

const findIfWrapped = (linePrefix: string, prop: string) => {
  if (linePrefix.endsWith(`${prop}="`) || linePrefix.endsWith(`${prop}='`))
    return true;

  return false;
};

export const isPropValid = (linePrefix: string, prop: string) => {
  if (
    linePrefix.endsWith(`${prop}=`) &&
    linePrefix.length - prop.length - 2 > 0 &&
    linePrefix.charAt(linePrefix.length - prop.length - 2) === ' '
  )
    return true;
  else if (
    linePrefix.endsWith(`${prop}="`) ||
    (linePrefix.endsWith(`${prop}='`) &&
      linePrefix.length - prop.length - 3 > 0 &&
      linePrefix.charAt(linePrefix.length - prop.length - 3) === ' ')
  )
    return true;

  return false;
};
const getValidProp = (linePrefix: string) => {
  for (let i = 0; i < nativeBaseProps.length; i++) {
    if (isPropValid(linePrefix, nativeBaseProps[i])) {
      const isWrapped: boolean = findIfWrapped(linePrefix, nativeBaseProps[i]);
      var validPropObject: {
        isWrapped: boolean;
        validProp: string;
      } = { isWrapped: isWrapped, validProp: nativeBaseProps[i] };

      return validPropObject;
    }
  }
  return { isWrapped: false, validProp: '' };
};

export default getValidProp;
