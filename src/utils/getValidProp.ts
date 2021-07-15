import { nativeBaseProps } from '../theme/nativeBaseProps';

const isPropValid = (linePrefix: string, prop: string) => {
	if (
		linePrefix.endsWith(prop + '=') &&
		linePrefix.length - prop.length - 2 > 0 &&
		linePrefix.charAt(linePrefix.length - prop.length - 2) === ' '
	)
		return true;

	return false;
};
const getValidProp = (linePrefix: string) => {
	for (let i = 0; i < nativeBaseProps.length; i++) {
		if (isPropValid(linePrefix, nativeBaseProps[i])) {
			return nativeBaseProps[i];
		}
	}
	return '';
};

export default getValidProp;
