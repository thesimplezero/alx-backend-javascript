const express = require('express');

const app = express();

// Define route for the root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Define route for the cart endpoint with dynamic ID
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

const PORT = 7865;
// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app; // Export app for testing
