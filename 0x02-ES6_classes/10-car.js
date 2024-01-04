/**
 * Class representing a Car.
 */
export default class Car {
  /**
   * Constructor for the Car class.
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The type of motor in the car.
   * @param {string} color - The color of the car.
   */
  constructor(brand, motor, color) {
    // Initializing instance variables.
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * Static getter for the Symbol.species property.
   * Returns the current class constructor as the default species constructor.
   * @returns {Function} - The current class constructor.
   */
  static get [Symbol.species]() {
    return this;
  }

  /**
   * Creates and returns a new instance of the same species as the current class.
   * @returns {Car} - A new instance of the same species as the current class.
   */
  cloneCar() {
    // Get the species constructor using Symbol.species.
    const Species = this.constructor[Symbol.species];
    // Create and return a new instance of the same species.
    return new Species();
  }
}
