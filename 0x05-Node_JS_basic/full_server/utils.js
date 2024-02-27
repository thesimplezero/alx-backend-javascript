// Import the fs module
import fs from 'fs';

// Export a function named readDatabase
export const readDatabase = (filePath) => {
  // Return a new promise
  return new Promise((resolve, reject) => {
    // Read the file at filePath
    fs.readFile(filePath, 'utf8', (error, data) => {
      // If there's an error, reject the promise with a new Error object
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        // Split the file data by newline, filter out empty lines, and assign the result to lines
        const lines = data.split('\n').filter(line => line.trim() !== '');
        // Declare an empty object named studentsByField
        const studentsByField = {};

        // Iterate over each line, starting from the second line (index 1)
        for (let i = 1; i < lines.length; i++) {
          // Split the current line by comma and assign the result to fields
          const fields = lines[i].split(',');
          // Assign the fourth field to field and the first field to firstName
          const field = fields[3];
          const firstName = fields[0];

          // If the field does not exist in studentsByField, create a new array
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }

          // Push the firstName to the array of the field in studentsByField
          studentsByField[field].push(firstName);
        }

        // Resolve the promise with studentsByField
        resolve(studentsByField);
      }
    });
  });
};
