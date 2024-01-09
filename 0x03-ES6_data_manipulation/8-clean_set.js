// Generates and returns a string containing values from the Set that start with the specified string.
// The resulting string concatenates these values, removing the common starting substring.
export default function cleanSet(set, startString) {
  let result = '';
  set.forEach((value) => {
    if (value && value.startsWith(startString)) {
      result += `${value.slice(startString.length)}-`;
    }
  });
  return result.slice(0, -1);
}
