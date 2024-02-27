// Import required modules
const http = require('http');
const { readFile } = require('fs');

// Define server details
const hostname = '127.0.0.1';
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

// Create the server
const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  // If the request URL is '/', send a welcome message
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }

  // If the request URL is '/students', send the list of students
  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      response.end(output.slice(0, -1)); // Remove the last newline character
    }).catch(() => {
      response.statusCode = 404;
      response.end('Cannot load the database');
    });
  }
});

// Start the server
app.listen(port, hostname, () => {});

// Export the server for testing
module.exports = app;
