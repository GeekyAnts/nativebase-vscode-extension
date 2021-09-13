import colors from '../theme/colors';
const resolveColors = () => {
  const validColors: object[] = [];
  for (const [colorName, value] of Object.entries(colors)) {
    if (colorName === 'contrastThreshold') continue;
    if (typeof value === 'object') {
      for (const [colorValue, rgb] of Object.entries(value)) {
        const colorObj = {
          name: colorName + '.' + colorValue,
          value: rgb,
        };
        validColors.push(colorObj);
      }
    } else {
      const colorObj = {
        name: colorName,
        value: value,
      };
      validColors.push(colorObj);
    }
  }
  return validColors;
};
export default resolveColors;
