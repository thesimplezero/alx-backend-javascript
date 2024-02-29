const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

/**
 * Test suite for sendPaymentRequestToApi function.
 */
describe('sendPaymentRequestToApi', function () {
    /**
     * Test case to ensure that Utils.calculateNumber is called with correct arguments.
     */
    it('should call Utils.calculateNumber with correct arguments', function () {
        // Spy on Utils.calculateNumber method
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        
        // Call the function under test
        sendPaymentRequestToApi(100, 20);
        
        // Assert that Utils.calculateNumber is called with correct arguments
        sinon.assert.calledWith(calculateNumberSpy, 'SUM', 100, 20);
        
        // Restore the spy after the test
        calculateNumberSpy.restore();
    });
});
