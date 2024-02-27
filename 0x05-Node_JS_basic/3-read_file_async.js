const { readFile } = require('fs').promises;

async function countStudents(fileName) {
  try {
    const students = {};
    const fields = {};
    let length = 0;

    // Read file asynchronously
    const data = await readFile(fileName, 'utf8');

    // Split data into lines
    const lines = data.trim().split('\n');

    // Iterate through each line
    for (const line of lines) {
      const [name, , , field] = line.split(',').map(entry => entry.trim());

      // Update students count for the field
      if (students[field]) {
        students[field].push(name);
      } else {
        students[field] = [name];
      }

      // Update fields count
      fields[field] = (fields[field] || 0) + 1;

      length++;
    }

    // Print the total number of students
    console.log(`Number of students: ${length}`);

    // Print number of students in each field and their names
    for (const [field, count] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${count}. List: ${students[field].join(', ')}`);
    }

    return data; // Return the data
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
