// Import the required modules
const express = require('express');
import routes from './routes/index.js';

// Create an Express application
const app = express();

// Define the port on which the server will listen
const PORT = 1245;

// Use the routes defined in './routes/index.js' for the root URL ('/')
app.use('/', routes);

// Define a route handler for GET requests to the '/students/:major' URL
app.get('/students/:major', (req, res) => {
  const { major } = req.params;

  // If the major is 'CS', send a list of CS students
  if (major === 'CS') {
    res.send('This is the list of our CS students...');
  } 
  // If the major is 'SWE', send a list of SWE students
  else if (major === 'SWE') {
    res.send('This is the list of our SWE students...');
  } 
  // If the major is neither 'CS' nor 'SWE', send an error message
  else {
    res.status(400).send('Invalid major parameter. Must be CS or SWE.');
  }
});

// Start the server and have it listen on the defined port
const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Export the Express application for testing
module.exports = app;
