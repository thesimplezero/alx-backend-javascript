// Function to simulate a failed photo upload, always rejecting a Promise
export default function uploadPhoto(filename) {
  // Reject with an error indicating the filename cannot be processed
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
