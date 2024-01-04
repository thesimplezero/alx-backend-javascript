/**
 * Base class representing a building.
 */
export default class Building {
  /**
   * Constructor for the Building class.
   * @param {number} sqft - The square footage of the building.
   * @throws {Error} - Throws an error if the subclass does not override evacuationWarningMessage.
   */
  constructor(sqft) {
    // Check if the class is not the base class and evacuationWarningMessage is not overridden.
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Subclass must override evacuationWarningMessage');
    }
    
    // Initializing instance variables.
    this._sqft = sqft;
  }

  /**
   * Getter for the square footage of the building.
   * @returns {number} - The square footage of the building.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Setter for the square footage of the building.
   * @param {number} newSqft - The new square footage of the building.
   */
  set sqft(newSqft) {
    this._sqft = newSqft;
  }
}
