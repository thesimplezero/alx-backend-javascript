const { expect } = require('chai');
const request = require('request');

/**
 * Test suite for the index page.
 */
describe('Index page', function() {
  /**
   * Test case to ensure correct status code and message are returned.
   */
  it('should return correct status code and message', function(done) {
    // Send a GET request to the index page
    request('http://localhost:7865', function(error, response, body) {
      if (error) {
        done(error); // Pass the error to the done callback
        return;
      }

      // Check if response is defined
      expect(response).to.exist;
      
      // Check status code
      expect(response.statusCode).to.equal(200);
      
      // Check body content
      expect(body).to.equal('Welcome to the payment system');

      done(); // Signal test completion
    });
  });
});
