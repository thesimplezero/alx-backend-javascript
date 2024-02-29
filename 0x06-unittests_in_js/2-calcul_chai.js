/**
 * Performs math operation based on type.
 * @param {string} type - Operation type.
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number|string} - Result or error.
 * @throws {Error} - Invalid type provided.
 */
function calculateNumber(type, a, b) {
    const roundA = Math.round(a), roundB = Math.round(b);
    if (type === 'SUM') return roundA + roundB;
    if (type === 'SUBTRACT') return roundA - roundB;
    if (type === 'DIVIDE') {
        if (roundB === 0) return 'Error';
        return roundA / roundB;
    }
    throw new Error('Invalid type');
}

module.exports = calculateNumber;
