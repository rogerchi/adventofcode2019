const testInput = `1,9,10,3,2,3,11,0,99,30,40,50`;

const input = `1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,9,23,1,23,13,27,1,10,27,31,2,31,13,35,1,10,35,39,2,9,39,43,2,43,9,47,1,6,47,51,1,10,51,55,2,55,13,59,1,59,10,63,2,63,13,67,2,67,9,71,1,6,71,75,2,75,9,79,1,79,5,83,2,83,13,87,1,9,87,91,1,13,91,95,1,2,95,99,1,99,6,0,99,2,14,0,0`;

const parsedInput = input.split(',').map(val => Number(val));

const intCode = (array, step = 0) => {
  // console.log(array, step);
  if (array[step] === 99) {
    return array;
  }
  if (array[step] === 1) {
    array[array[step + 3]] = array[array[step + 1]] + array[array[step + 2]];
    return intCode(array, step + 4);
  }
  if (array[step] === 2) {
    array[array[step + 3]] = array[array[step + 1]] * array[array[step + 2]];
    return intCode(array, step + 4);
  }
}

let output = null;
let i = 0;
let j = 0;

for (i = 0; i < 100; i++) {
  for (j = 0; j < 100; j++) {
    const alarmState = [...parsedInput];
    alarmState[1] = i;
    alarmState[2] = j;
    output = intCode(alarmState)[0];
    // console.log(i, j, output);
    if (output === 19690720) {
      break;
    }
  }
  if (output === 19690720) {
    break;
  }
}

console.log(i * 100 + j);