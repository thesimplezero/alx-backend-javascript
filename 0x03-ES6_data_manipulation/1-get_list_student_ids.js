// Retrieves student IDs from an array of objects and returns them as an array.
// If the input is not an array, an empty array is returned.
export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((item) => item.id);
}
