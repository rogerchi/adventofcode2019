const intcode = require("./intcode");

const amplifier = (
  program,
  phaseSetting = [0, 1, 2, 3, 4],
  initialInput = 0
) => {
  let input = initialInput;
  while (phaseSetting.length > 0) {
    const usedProgram = [...program];
    input = intcode(usedProgram, 0, [phaseSetting.shift(), input])[0];
  }
  return input;
};

module.exports = amplifier;
