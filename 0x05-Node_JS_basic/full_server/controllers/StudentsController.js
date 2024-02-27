// Import the readDatabase function from the '../utils' module
import { readDatabase } from '../utils';

// Export a class named StudentsController
export default class StudentsController {
  // Define a static async method named getAllStudents
  static async getAllStudents(req, res) {
    try {
      // Read the database and get the students by field
      const studentsByField = await readDatabase(req.filePath);
      let response = 'This is the list of our students\n';

      // Iterate over each field in studentsByField
      for (const field in studentsByField) {
        // Get the count of students in the current field
        const count = studentsByField[field].length;
        // Get the list of students in the current field
        const list = studentsByField[field].join(', ');
        // Add the count and list of students in the current field to the response
        response += `Number of students in ${field}: ${count}. List: ${list}\n`;
      }

      // Send a status of 200 (OK) and the response to the client
      res.status(200).send(response);
    } catch (error) {
      // If there's an error, log it and send a status of 500 (Internal Server Error) and an error message to the client
      console.error('Error:', error);
      res.status(500).send('Cannot load the database');
    }
  }

  // Define a static async method named getAllStudentsByMajor
  static async getAllStudentsByMajor(req, res) {
    try {
      // Read the database and get the students by field
      const studentsByField = await readDatabase(req.filePath);
      // Get the major from the request parameters and convert it to uppercase
      const major = req.params.major.toUpperCase();

      // If the major is not 'CS' or 'SWE', send a status of 500 (Internal Server Error) and an error message to the client
      if (major !== 'CS' && major !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      // Get the list of students in the major, or an empty array if there are no students in the major
      const list = studentsByField[major] || [];
      // Prepare the response
      const response = `List: ${list.join(', ')}`;
      // Send a status of 200 (OK) and the response to the client
      res.status(200).send(response);
    } catch (error) {
      // If there's an error, log it and send a status of 500 (Internal Server Error) and an error message to the client
      console.error('Error:', error);
      res.status(500).send('Cannot load the database');
    }
  }
}
