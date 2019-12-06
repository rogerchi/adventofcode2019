const countOrbits = require('./countOrbits');
const createMap = require('./createMap');

const input = `COM)B
B)C
C)D
D)E
E)F
B)G
G)H
D)I
E)J
J)K
K)L`;

test("test", () => {
  expect(countOrbits(createMap(input))).toBe(42);
});