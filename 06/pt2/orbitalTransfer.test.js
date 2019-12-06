const orbitalTransfer = require("./orbitalTransfer");
const createMap = require("./createMap");

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
K)L
K)YOU
I)SAN`;

const orbitalMap = createMap(input);

test("number of transfers", () => {
  expect(orbitalTransfer("YOU", "SAN", orbitalMap)).toBe(4);
});
