const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

/**
 * Test suite for the cart page.
 */
describe('Cart page', () => {
  /**
   * Test case to ensure payment methods are returned for a cart with a valid ID.
   */
  it('Should return payment methods for cart with a valid id', async () => {
    const response = await request(app).get('/cart/12');
    expect(response.statusCode).to.equal(200);
    expect(response.text).to.equal('Payment methods for cart 12');
  });

  /**
   * Test case to ensure 404 status code is returned for a cart with an invalid ID.
   */
  it('Should return 404 for cart with an invalid id', async () => {
    const response = await request(app).get('/cart/hello');
    expect(response.statusCode).to.equal(404);
  });

  /**
   * Test case to validate the cart ID parameter.
   */
  it('should validate the cart ID parameter', (done) => {
    request(app)
      .get('/cart/abc')
      .expect(404, done);
  });

  /**
   * Test case to handle invalid routes gracefully.
   */
  it('should handle invalid routes gracefully', (done) => {
    request(app)
      .get('/cart/invalidroute')
      .expect(404)
      .end((err, res) => {
        expect(res.text).to.include('Cannot GET /cart/invalidroute');
        done();
      });
  });
});
