import typography from '../theme/typography';
function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
	return key in obj;
}
const resolveTypography = (prop: string) => {
	const validTypography: object[] = [];
	const convertedProp: string = prop + 's';
	if (hasKey(typography, convertedProp)) {
		for (const [key, value] of Object.entries(typography[convertedProp])) {
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
