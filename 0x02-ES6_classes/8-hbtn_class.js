/**
 * Class representing a HolbertonClass.
 */
export default class HolbertonClass {
  /**
   * Constructor for the HolbertonClass.
   * @param {any} size - The size property of the class.
   * @param {any} location - The location property of the class.
   */
  constructor(size, location) {
    // Initializing instance variables.
    this._size = size;
    this._location = location;
  }

  /**
   * Customizes the behavior when the class instance is cast to a primitive type.
   * @param {string} hint - The hint for the preferred type conversion ('number' or 'string').
   * @returns {number|string|null} - The converted value based on the hint.
   */
  [Symbol.toPrimitive](hint) {
    return hint === 'number' ? this._size : hint === 'string' ? this._location : null;
  }
}
