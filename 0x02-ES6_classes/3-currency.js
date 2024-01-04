/**
 * Class representing a currency.
 */
export default class Currency {
  /**
   * Constructor for the Currency class.
   * @param {string} code - The currency code.
   * @param {string} name - The name of the currency.
   */
  constructor(code, name) {
    // Initializing instance variables.
    this._code = code;
    this._name = name;
  }

  /**
   * Getter for the currency code.
   * @returns {string} - The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Setter for the currency code.
   * @param {string} newCode - The new currency code.
   * @throws {TypeError} - Throws a TypeError if the new code is not a string.
   */
  set code(newCode) {
    // Checking and validating the input type.
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be a string');
    }

    // Setting the new currency code.
    this._code = newCode;
  }

  /**
   * Getter for the name of the currency.
   * @returns {string} - The name of the currency.
   */
  get name() {
    return this._name;
  }

  /**
   * Setter for the name of the currency.
   * @param {string} newName - The new name of the currency.
   * @throws {TypeError} - Throws a TypeError if the new name is not a string.
   */
  set name(newName) {
    // Checking and validating the input type.
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }

    // Setting the new name of the currency.
    this._name = newName;
  }

  /**
   * Method to display the full currency information.
   * @returns {string} - A string representation of the currency, including name and code.
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
