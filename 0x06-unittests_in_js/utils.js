/**
 * Utility object for common operations.
 */
const Utils = {
    /**
     * Performs mathematical operations based on type.
     * @param {string} type - The type of operation ('SUM', 'SUBTRACT', or 'DIVIDE').
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number|string} - The result of the operation, or 'Error' if division by zero occurs.
     * @throws {Error} - If an invalid type is provided.
     */
    calculateNumber(type, a, b) {
        if (type === 'SUM') {
            return Math.round(a) + Math.round(b);
        } else if (type === 'SUBTRACT') {
            return Math.round(a) - Math.round(b);
        } else if (type === 'DIVIDE') {
            const roundedB = Math.round(b);
            if (roundedB === 0) {
                return 'Error';
            }
            return Math.round(a) / roundedB;
        } else {
            throw new Error('Invalid type');
        }
    }
};

module.exports = Utils;
