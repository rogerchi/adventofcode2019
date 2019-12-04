module.exports = (password, range = [0, 999999]) => {
  const passStr = password.toString().padStart(6, "0");
  const passArr = passStr.split("");
  if (passStr.length !== 6) {
    return false;
  }
  if (!(range[0] <= password <= range[1])) {
    return false;
  }
  let prevDigit = 0;
  let hasDouble = false;
  for (const [i, digit] of passArr.entries()) {
    if (digit < prevDigit) {
      return false;
    }
    hasDouble = hasDouble || prevDigit === digit;
    prevDigit = digit;
  }
  if (!hasDouble) {
    return false;
  }
  return true;
};
