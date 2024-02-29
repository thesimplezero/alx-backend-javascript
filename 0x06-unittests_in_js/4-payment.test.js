const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

/**
 * Test suite for sendPaymentRequestToApi function.
 */
describe('sendPaymentRequestToApi', function () {
    let consoleLogSpy;
    let calculateNumberStub;

    /**
     * Sets up spies and stubs before each test case.
     */
    beforeEach(function () {
        consoleLogSpy = sinon.spy(console, 'log');
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    });

    /**
     * Restores spies and stubs after each test case.
     */
    afterEach(function () {
        consoleLogSpy.restore();
        calculateNumberStub.restore();
    });

    /**
     * Test case to ensure that Utils.calculateNumber is called with correct arguments.
     */
    it('should call Utils.calculateNumber with correct arguments', function () {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
    });

    /**
     * Test case to ensure that the correct message is logged to the console.
     */
    it('should log correct message to console', function () {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(consoleLogSpy, 'The total is: 10');
    });
});
