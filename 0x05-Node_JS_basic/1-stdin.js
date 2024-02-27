// 1-stdin.js

// Set encoding to handle input
process.stdin.setEncoding('utf8');

// Prompt the user for their name
console.log('Welcome to Holberton School, what is your name?');

// Initialize variable to store user input
let name = '';

// Listen for user input
process.stdin.on('data', (input) => {
  // Append input to name variable
  name += input.trim();
  // Check if input exists
  if (name) {
    // Output the user's name
    console.log(`Your name is: ${name}`);
    // Pause the input stream
    process.stdin.pause();
  } else {
    // Output if no input received
    console.log('No input received');
    // Pause the input stream
    process.stdin.pause();
  }
});

// Handle end of input stream
process.stdin.on('end', () => {
  // Notify the closing of the software
  console.log('This important software is now closing');
});
