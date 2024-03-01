const Utils = require('./utils');

/**
 * Sends a payment request to the API and logs the total amount.
 * @param {number} totalAmount - The total amount of the payment.
 * @param {number} totalShipping - The total shipping cost.
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
    // Calculate the sum of the total amount and shipping cost
    const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    // Log the total amount
    console.log(`The total is: ${sum}`);
}

module.exports = sendPaymentRequestToApi;
