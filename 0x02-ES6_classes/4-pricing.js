import Currency from './3-currency';

/**
 * Represents a pricing entity with an amount and associated currency.
 */
export default class Pricing {
  /**
   * Creates a new Pricing instance.
   * @param {number} amount - The amount of the pricing.
   * @param {Currency} currency - The currency of the pricing.
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Gets the amount of the pricing.
   * @returns {number} - The amount of the pricing.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Gets the currency of the pricing.
   * @returns {Currency} - The currency of the pricing.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the amount of the pricing.
   * @param {number} amount - The new amount of the pricing.
   */
  set amount(amount) {
    this._amount = amount;
  }

  /**
   * Sets the currency of the pricing.
   * @param {Currency} currency - The new currency of the pricing.
   */
  set currency(currency) {
    this._currency = currency;
  }

  /**
   * Displays the full price including the amount and currency information.
   * @returns {string} - A string representation of the full price.
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  /**
   * Converts a price using a conversion rate.
   * @static
   * @param {number} amount - The original amount to be converted.
   * @param {number} conversionRate - The conversion rate to apply.
   * @returns {number} - The converted amount.
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
