// Checks if all elements in the array exist within the specified Set.
// Returns a boolean indicating whether every element from the array is present in the Set.
export default function hasValuesFromArray(set, array) {
  return array.every((item) => set.has(item));
}
