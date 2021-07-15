import borders from '../theme/borders';
const resolveBorders = () => {
  const validBorders: object[] = [];
  for (const [key, value] of Object.entries(borders)) {
    const borderObj = {
      name: key,
      value: value,
    };
    validBorders.push(borderObj);
  }
  return validBorders;
};
export default resolveBorders;
