const assert = require('assert');
const calculateNumber = require('./0-calcul');

/**
 * Test suite for the calculateNumber function.
 */
describe('calculateNumber', function () {
    /**
     * Helper function to test calculateNumber with given inputs and expected output.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @param {number} expected - The expected result of the calculation.
     */
    function testCalculateNumber(a, b, expected) {
        it(`should return ${expected} when calculating ${a} and ${b}`, function () {
            assert.strictEqual(calculateNumber(a, b), expected);
        });
    }

    // Test cases
    testCalculateNumber(1, 3, 4);
    testCalculateNumber(1, 3.7, 5);
    testCalculateNumber(1.2, 3.7, 5);
    testCalculateNumber(1.5, 3.7, 6);
});
