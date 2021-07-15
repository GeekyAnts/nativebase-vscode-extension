import shadows from '../theme/shadows';
const resolveShadows = () => {
	const shadowObj = shadows();
	const validShadows: object[] = [];
	for (const [key, value] of Object.entries(shadowObj)) {
		const shadowObj = {
			name: key,
			value: '',
		};
		validShadows.push(shadowObj);
	}
	return validShadows;
};
export default resolveShadows;
