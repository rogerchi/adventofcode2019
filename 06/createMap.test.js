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

const expected = {
  "B": "COM",
  "C": "B",
  "D": "C",
  "E": "D",
  "F": "E",
  "G": "B",
  "H": "G",
  "I": "D",
  "J": "E",
  "K": "J",
  "L": "K"
}

test("it creates the correct object", () => {
  expect(createMap(input)).toEqual(expected);;
})