import Car from './10-car';

/**
 * Class representing an Electric Vehicle (EV) Car, extending from the base Car class.
 */
export default class EVCar extends Car {
  /**
   * Constructor for the EVCar class.
   * @param {string} brand - The brand of the EV car.
   * @param {string} motor - The type of motor in the EV car.
   * @param {string} color - The color of the EV car.
   * @param {number} range - The range of the EV car in miles.
   */
  constructor(brand, motor, color, range) {
    // Calling the constructor of the base Car class.
    super(brand, motor, color);
    // Initializing the additional property specific to EV cars.
    this._range = range;
  }

  /**
   * Static getter for the Symbol.species property.
   * Returns the base Car class as the species constructor for EVCar instances.
   * @returns {Function} - The base Car class constructor.
   */
  static get [Symbol.species]() {
    return Car;
  }
}
