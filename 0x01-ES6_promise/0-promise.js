export default function getResponseFromAPI(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { // Simulate potential API delay
      if (success) {
        resolve('success');
      } else {
        reject(new Error('error')); // Use Error constructor for proper error handling
      }
    }, 500); // Example delay for demonstration
  });
}
