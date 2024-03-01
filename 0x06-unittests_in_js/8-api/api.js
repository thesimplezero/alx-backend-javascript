const express = require('express');

const app = express();

// Define route for the root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

const PORT = 7865;
// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});
