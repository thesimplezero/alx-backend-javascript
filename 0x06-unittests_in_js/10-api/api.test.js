const { expect } = require('chai');
const request = require('supertest');
const app = require('./api');

/**
 * Test suite for the /login endpoint.
 */
describe('Testing /login endpoint', () => {
  /**
   * Test case to ensure correct response for login.
   */
  it('should return "Welcome Betty"', async () => {
    const response = await request(app)
      .post('/login')
      .send({ userName: 'Betty' })
      .expect(200);

    expect(response.text).to.equal('Welcome Betty');
  });
});

/**
 * Test suite for the /available_payments endpoint.
 */
describe('Testing /available_payments endpoint', () => {
  /**
   * Test case to ensure correct response for available payment methods.
   */
  it('should return correct payment methods', async () => {
    const response = await request(app)
      .get('/available_payments')
      .expect(200);

    expect(response.body).to.deep.equal({
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    });
  });
});
