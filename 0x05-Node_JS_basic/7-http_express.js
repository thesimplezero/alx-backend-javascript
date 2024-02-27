// Import the express and fs modules
const express = require('express');
const { readFile } = require('fs');

// Create an express application
const app = express();

// Define the port on which the server will listen
const port = 1245;

// Function to count students in a given file
function countStudents(fileName) {
  const students = {}; // Store students by field
  const fields = {}; // Store count of students by field
  let length = 0; // Total number of students

  // Return a new promise
  return new Promise((resolve, reject) => {
    // Read the file
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err); // If there's an error, reject the promise
      } else {
        let output = ''; // Output string
        const lines = data.toString().split('\n'); // Split the file data by newline

        // Iterate over each line
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) { // If the line is not empty
            length += 1; // Increase the total student count
            const field = lines[i].toString().split(','); // Split the line by comma

            // If the field already exists in students, push the student id, else create a new array
            students[field[3]] = students[field[3]] ? [...students[field[3]], field[0]] : [field[0]];

            // If the field already exists in fields, increment the count, else set it to 1
            fields[field[3]] = fields[field[3]] ? fields[field[3]] + 1 : 1;
          }
        }

        // Prepare the output string
        output += `Number of students: ${length - 1}\n`; // Subtract 1 to exclude the header row
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }

        // Resolve the promise with the output string
        resolve(output);
      }
    });
  });
}

// Define a route handler for GET requests to the root URL ('/')
app.get('/', (request, response) => {
  // Send a welcome message to the client
  response.send('Hello Holberton School!');
});

// Define a route handler for GET requests to the '/students' URL
app.get('/students', (request, response) => {
  // Call the countStudents function and send the result to the client
  countStudents(process.argv[2].toString()).then((output) => {
    response.send(['This is the list of our students', output].join('\n'));
  }).catch(() => {
    // If there's an error, send an error message to the client
    response.send('This is the list of our students\nCannot load the database');
  });
});

// Start the server and have it listen on the defined port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Export the express application for testing
module.exports = app;
