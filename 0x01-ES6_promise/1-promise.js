export default function getFullResponseFromAPI(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { // Simulate API delay
      const response = { status: 200, body: 'Success' }; // Pre-construct response object
      if (success) {
        resolve(response);
      } else {
        reject(new Error('API unavailable')); // Concise error message
      }
    }, 500); // Adjust delay as needed
  });
}
