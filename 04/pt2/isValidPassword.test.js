const isValidPassword = require("./isValidPassword");

test("111111 fails", () => {
  expect(isValidPassword(111111)).toBe(false);
});

test("223450 fails", () => {
  expect(isValidPassword(223450)).toBe(false);
});

test("123789 fails", () => {
  expect(isValidPassword(123789)).toBe(false);
});

test("112233 passes", () => {
  expect(isValidPassword(112233)).toBe(true);
});

test("123444 fails", () => {
  expect(isValidPassword(123444)).toBe(false);
});

test("111122 passes", () => {
  expect(isValidPassword(111122)).toBe(true);
});

test("112222 passes", () => {
  expect(isValidPassword(112222)).toBe(true);
});
