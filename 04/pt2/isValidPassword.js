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
  let consecutiveMatches = 0;
  for (const [i, digit] of passArr.entries()) {
    if (digit < prevDigit) {
      return false;
    }
    if (prevDigit === digit) {
      consecutiveMatches++;
    }
    if (consecutiveMatches === 1 && prevDigit !== digit) {
      hasDouble = true;
    }
    if (prevDigit !== digit) {
      consecutiveMatches = 0;
    }

    prevDigit = digit;
  }
  if (consecutiveMatches === 1) {
    hasDouble = true;
  }
  if (!hasDouble) {
    return false;
  }
  return true;
};
