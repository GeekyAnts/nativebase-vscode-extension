import radii from '../theme/radius';
const resolveRadius = () => {
	const validRadius: object[] = [];
	for (const [key, value] of Object.entries(radii)) {
		const radiusObject = {
			name: key,
			value: value,
		};
		validRadius.push(radiusObject);
	}
	return validRadius;
};
export default resolveRadius;
