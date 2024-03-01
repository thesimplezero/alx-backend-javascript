const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

/**
 * Test suite for sendPaymentRequestToApi function.
 */
describe('sendPaymentRequestToApi', function () {
    let consoleLogSpy;

    /**
     * Sets up spy on console.log before each test case.
     */
    beforeEach(function () {
        consoleLogSpy = sinon.spy(console, 'log');
    });

    /**
     * Restores console.log spy after each test case.
     */
    afterEach(function () {
        consoleLogSpy.restore();
    });

    /**
     * Test case to ensure correct message is logged for totalAmount=100, totalShipping=20.
     */
    it('should log correct message to console for totalAmount=100, totalShipping=20', function () {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(consoleLogSpy, 'The total is: 120');
        sinon.assert.calledOnce(consoleLogSpy);
    });

    /**
     * Test case to ensure correct message is logged for totalAmount=10, totalShipping=10.
     */
    it('should log correct message to console for totalAmount=10, totalShipping=10', function () {
        sendPaymentRequestToApi(10, 10);
        sinon.assert.calledWith(consoleLogSpy, 'The total is: 20');
        sinon.assert.calledOnce(consoleLogSpy);
    });
});
