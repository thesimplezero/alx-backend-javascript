const assert = require('assert');
const calculateNumber = require('./1-calcul');

/**
 * Test suite for the calculateNumber function.
 */
describe('calculateNumber', function () {
    /**
     * Helper function to test calculateNumber with given inputs and expected output.
     * @param {string} type - The type of operation ('SUM', 'SUBTRACT', or 'DIVIDE').
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @param {number|string} expected - The expected result of the calculation, or 'Error' if division by zero occurs.
     */
    function testCalculateNumber(type, a, b, expected) {
        it(`should return ${expected} when ${type} is applied to ${a} and ${b}`, function () {
            assert.strictEqual(calculateNumber(type, a, b), expected);
        });
    }

    // Test cases for SUM operation
    describe('SUM operation', function () {
        testCalculateNumber('SUM', 1.4, 4.5, 6);
    });

    // Test cases for SUBTRACT operation
    describe('SUBTRACT operation', function () {
        testCalculateNumber('SUBTRACT', 1.4, 4.5, -4);
    });

    // Test cases for DIVIDE operation
    describe('DIVIDE operation', function () {
        testCalculateNumber('DIVIDE', 1.4, 4.5, 0.2);
        testCalculateNumber('DIVIDE', 1.4, 0, 'Error');
    });
});
