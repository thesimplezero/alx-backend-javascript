// Import the 'http' module
const http = require('http');

// Define the hostname and port number
const hostname = '127.0.0.1';
const port = 1245;

// Create an HTTP server
const app = http.createServer((request, response) => {
  // Set the status code of the response to 200 (OK)
  response.statusCode = 200;
  // Set the content type of the response to plain text
  response.setHeader('Content-Type', 'text/plain');
  // Send the response with the message "Hello Holberton School!"
  response.end('Hello Holberton School!');
});

// Make the server listen on the defined port and hostname
app.listen(port, hostname, () => {
});

// Export the app to make it accessible to other modules
module.exports = app;
