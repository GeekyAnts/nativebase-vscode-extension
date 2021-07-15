import resolveColors from '../utils/resolveColors';
import resolveSpacing from '../utils/resolveSpacing';
import resolveTypography from '../utils/resolveTypography';
import resolveSizing from '../utils/resolveSizing';
import resolveRadius from '../utils/resolveRadius';
import resolveShadows from '../utils/resolveShadows';
import resolveBorders from '../utils/resolveBorders';

const themeMap = {
	color: resolveColors,
	typography: resolveTypography,
	sizing: resolveSizing,
	shadow: resolveShadows,
	border: resolveBorders,
	radius: resolveRadius,
	spacing: resolveSpacing,
};

export default themeMap;
