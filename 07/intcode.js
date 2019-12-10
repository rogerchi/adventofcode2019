const intCode = (array, step = 0, input = [], output = []) => {
  const parsedInput = Array.isArray(input) ? input : [input];
  const instruction = array[step].toString().padStart(5, "0");
  const opcode = Number(instruction.slice(-2));
  const paramsModes = instruction
    .slice(0, 3)
    .split("")
    .map(param => Number(param));
  const params = [
    paramsModes[2] === 0 ? array[array[step + 1]] : array[step + 1],
    paramsModes[1] === 0 ? array[array[step + 2]] : array[step + 2],
    paramsModes[0] === 0 ? array[array[step + 3]] : array[step + 3]
  ];
  switch (opcode) {
    case 99:
      return output;
    case 1:
      array[array[step + 3]] = params[0] + params[1];
      return intCode(array, step + 4, input, output);
    case 2:
      array[array[step + 3]] = params[0] * params[1];
      return intCode(array, step + 4, input, output);
    case 3:
      array[array[step + 1]] = parsedInput.shift();
      return intCode(array, step + 2, input, output);
    case 4:
      // console.log(instruction, step, array[array[step + 1]]);
      output.push(params[0]);
      return intCode(array, step + 2, input, output);
    case 5:
      if (params[0] > 0) {
        return intCode(array, params[1], input, output);
      }
      return intCode(array, step + 3, input, output);
    case 6:
      if (params[0] === 0) {
        return intCode(array, params[1], input, output);
      }
      return intCode(array, step + 3, input, output);
    case 7:
      if (params[0] < params[1]) {
        array[array[step + 3]] = 1;
        return intCode(array, step + 4, input, output);
      }
      array[array[step + 3]] = 0;
      return intCode(array, step + 4, input, output);
    case 8:
      if (params[0] === params[1]) {
        array[array[step + 3]] = 1;
        return intCode(array, step + 4, input, output);
      }
      array[array[step + 3]] = 0;
      return intCode(array, step + 4, input, output);
  }
};

module.exports = intCode;
