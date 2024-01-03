// Function to sign up a user, returning a Promise
function signUpUser(firstName, lastName) {
  // Create a new Promise for asynchronous operation
  return new Promise((resolve, reject) => {
    // Validate first and last name
    if (!firstName || !lastName) {
      // Reject with error if names are missing
      reject(new Error('You need to provide first and last name'));
    }
    // Resolve with user object if names are valid
    resolve({
      firstName,
      lastName,
    });
  });
}

// Export the signUpUser function for use in other modules
export default signUpUser;
