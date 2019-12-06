const traverse = (planet, orbitMap, array = []) => {
  if (!planet) {
    return array;
  }
  array.push(planet);
  return traverse(orbitMap[planet], orbitMap, array);
};

module.exports = (src, dest, orbitMap) => {
  const srcPath = traverse(src, orbitMap);
  const destPath = traverse(dest, orbitMap);
  const srcSet = new Set(srcPath);
  const destSet = new Set(destPath);
  const unionSet = new Set([...srcSet, ...destSet]);
  const intSet = new Set([...srcSet].filter(x => destSet.has(x)));
  const diffSet = new Set([...unionSet].filter(x => !intSet.has(x)));
  // console.log(diffSet);
  return [...diffSet].length - 2;
};
