const isValidPassword = require("./isValidPassword");

test("111111 passes", () => {
  expect(isValidPassword(111111)).toBe(true);
});

test("223450 fails", () => {
  expect(isValidPassword(223450)).toBe(false);
});

test("123789 fails", () => {
  expect(isValidPassword(123789)).toBe(false);
});
