const intCode = require("./intcode");

test("input equal to 8", () => {
  expect(intCode([3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8], 0, 8).slice(-1)[0]).toBe(
    1
  );
});

test("input not equal to 8", () => {
  expect(intCode([3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8], 0, 5).slice(-1)[0]).toBe(
    0
  );
});

test("input not equal to 8", () => {
  expect(
    intCode([3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8], 0, 10).slice(-1)[0]
  ).toBe(0);
});

test("input less than 8", () => {
  expect(intCode([3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8], 0, 6).slice(-1)[0]).toBe(
    1
  );
});

test("input not less than 8", () => {
  expect(intCode([3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8], 0, 8).slice(-1)[0]).toBe(
    0
  );
});

test("input not less than 8", () => {
  expect(
    intCode([3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8], 0, 10).slice(-1)[0]
  ).toBe(0);
});

test("immediate input equal to 8", () => {
  expect(intCode([3, 3, 1108, -1, 8, 3, 4, 3, 99], 0, 8).slice(-1)[0]).toBe(1);
});

test("immediate input not equal to 8", () => {
  expect(intCode([3, 3, 1108, -1, 8, 3, 4, 3, 99], 0, 5).slice(-1)[0]).toBe(0);
});

test("immediate input not equal to 8", () => {
  expect(intCode([3, 3, 1108, -1, 8, 3, 4, 3, 99], 0, 10).slice(-1)[0]).toBe(0);
});

test("immediate input less than 8", () => {
  expect(intCode([3, 3, 1107, -1, 8, 3, 4, 3, 99], 0, 6).slice(-1)[0]).toBe(1);
});

test("immediate input not less than 8", () => {
  expect(intCode([3, 3, 1107, -1, 8, 3, 4, 3, 99], 0, 8).slice(-1)[0]).toBe(0);
});

test("immediate input not less than 8", () => {
  expect(intCode([3, 3, 1107, -1, 8, 3, 4, 3, 99], 0, 10).slice(-1)[0]).toBe(0);
});

test("input is 0", () => {
  expect(
    intCode(
      [3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9],
      0,
      0
    ).slice(-1)[0]
  ).toBe(0);
});
test("input is not 0", () => {
  expect(
    intCode(
      [3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9],
      0,
      5
    ).slice(-1)[0]
  ).toBe(1);
});
test("input is not 0", () => {
  expect(
    intCode(
      [3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9],
      0,
      -5
    ).slice(-1)[0]
  ).toBe(1);
});

test("input is 0", () => {
  expect(
    intCode([3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1], 0, 0).slice(
      -1
    )[0]
  ).toBe(0);
});
test("input is not 0", () => {
  expect(
    intCode([3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1], 0, 5).slice(
      -1
    )[0]
  ).toBe(1);
});
test("input is not 0", () => {
  expect(
    intCode([3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1], 0, 3).slice(
      -1
    )[0]
  ).toBe(1);
});

test("input is less than 8", () => {
  expect(
    intCode(
      [
        3,
        21,
        1008,
        21,
        8,
        20,
        1005,
        20,
        22,
        107,
        8,
        21,
        20,
        1006,
        20,
        31,
        1106,
        0,
        36,
        98,
        0,
        0,
        1002,
        21,
        125,
        20,
        4,
        20,
        1105,
        1,
        46,
        104,
        999,
        1105,
        1,
        46,
        1101,
        1000,
        1,
        20,
        4,
        20,
        1105,
        1,
        46,
        98,
        99
      ],
      0,
      6
    ).slice(-1)[0]
  ).toBe(999);
});
test("input is 8", () => {
  expect(
    intCode(
      [
        3,
        21,
        1008,
        21,
        8,
        20,
        1005,
        20,
        22,
        107,
        8,
        21,
        20,
        1006,
        20,
        31,
        1106,
        0,
        36,
        98,
        0,
        0,
        1002,
        21,
        125,
        20,
        4,
        20,
        1105,
        1,
        46,
        104,
        999,
        1105,
        1,
        46,
        1101,
        1000,
        1,
        20,
        4,
        20,
        1105,
        1,
        46,
        98,
        99
      ],
      0,
      8
    ).slice(-1)[0]
  ).toBe(1000);
});
test("input is greater than 8", () => {
  expect(
    intCode(
      [
        3,
        21,
        1008,
        21,
        8,
        20,
        1005,
        20,
        22,
        107,
        8,
        21,
        20,
        1006,
        20,
        31,
        1106,
        0,
        36,
        98,
        0,
        0,
        1002,
        21,
        125,
        20,
        4,
        20,
        1105,
        1,
        46,
        104,
        999,
        1105,
        1,
        46,
        1101,
        1000,
        1,
        20,
        4,
        20,
        1105,
        1,
        46,
        98,
        99
      ],
      0,
      10
    ).slice(-1)[0]
  ).toBe(1001);
});
