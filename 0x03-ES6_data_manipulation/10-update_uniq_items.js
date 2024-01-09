// Updates and returns a Map, setting the quantity of items with an initial quantity of 1 to 100.
// Throws an error if the input is not a Map.
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}
