// Import the express module
const express = require('express');

// Create an express application
const app = express();

// Define the port on which the server will listen
const port = 1245;

// Define a route handler for GET requests to the root URL ('/')
app.get('/', (request, response) => {
  // Send a response to the client
  response.send('Hello Holberton School!');
});

// Start the server and have it listen on the defined port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Export the express application for testing
module.exports = app;
