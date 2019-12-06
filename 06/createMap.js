module.exports = (input) => {
  const parsedInput = input.split(/\r?\n/);
  const map = parsedInput.reduce((acc, val) => {
    const orbit = val.split(')');
    acc[orbit[1]] = orbit[0];
    return acc;
  }, {})
  return map;
}