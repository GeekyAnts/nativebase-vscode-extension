import { spacing } from '../theme/space';
const resolveSpacing = () => {
	const validSpacing: object[] = [];
	for (const [key, value] of Object.entries(spacing)) {
		const spacingObj = {
			name: key,
			value: value,
		};
		validSpacing.push(spacingObj);
	}
	return validSpacing;
};
export default resolveSpacing;
