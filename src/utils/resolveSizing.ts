import sizes from '../theme/sizes';
const resolveSizing = () => {
  const validSizing: object[] = [];
  for (const [key, value] of Object.entries(sizes)) {
    const sizeObj = {
      name: key,
      value: key === 'container' ? '' : value,
    };
    validSizing.push(sizeObj);
  }
  return validSizing;
};
export default resolveSizing;
