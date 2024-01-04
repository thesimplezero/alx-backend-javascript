/**
 * Class representing an airport.
 */
export default class Airport {
  /**
   * Constructor for the Airport class.
   * @param {string} name - The name of the airport.
   * @param {string} code - The code of the airport.
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;

    // Set the Symbol.toStringTag directly in the constructor.
    this[Symbol.toStringTag] = `${this._code}`;
  }
}
