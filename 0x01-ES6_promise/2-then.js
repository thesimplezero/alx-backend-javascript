export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' })) // Arrow function for conciseness
    .catch(error => { // Catch error object for handling
      throw new Error('API error:', error); // Rethrow with more context
    })
    .finally(() => console.log('Got a response from the API')); // Log in finally
}
