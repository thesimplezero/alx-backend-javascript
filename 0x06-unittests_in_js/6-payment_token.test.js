const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

/**
 * Test suite for getPaymentTokenFromAPI function.
 */
describe('getPaymentTokenFromAPI', function () {
    /**
     * Test case to ensure promise resolves with correct data when success is true.
     */
    it('should resolve with correct data when success is true', function (done) {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                // Assertion to test resolved data
                expect(response).to.deep.equal({ data: 'Successful response from the API' });
                // Call done to indicate async operation is complete
                done();
            })
            .catch((error) => {
                // Call done with error if promise rejects
                done(error);
            });
    });
});
