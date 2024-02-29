/**
 * Calculates the sum of two numbers after rounding each of them to the nearest integer.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The sum of the rounded numbers.
 */
function calculateNumber(a, b) {
    return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
