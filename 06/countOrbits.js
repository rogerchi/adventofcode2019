const countOrbit = (planet, map) => {
  if (!planet) {
    return 0
  }
  return 1 + countOrbit(map[planet], map);
}

module.exports = (orbitMap) => {
  const mapEntries = Object.entries(orbitMap);
  const orbits = mapEntries.map(([_key, val], _i) => countOrbit(val, orbitMap));
  return orbits.reduce((acc, val) => acc + val);
}