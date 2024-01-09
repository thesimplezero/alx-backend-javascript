// Creates and returns a new Int8 TypedArray within an ArrayBuffer with a specified length.
// Sets an Int8 value at the given position within the TypedArray.
// Throws an error if the specified position is outside the valid range.
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0);

  if (position >= 0 && position < length) {
    view.setInt8(position, value);
  } else {
    throw new Error('Position outside valid range');
  }

  return view;
}
