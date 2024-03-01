/**
 * Retrieves payment token from the API.
 * @param {boolean} success - Indicates whether the API call is successful or not.
 * @returns {Promise<Object>} - A promise that resolves with the API response data if successful.
 */
function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            // If success is false, do nothing
        }
    });
}

module.exports = getPaymentTokenFromAPI;
