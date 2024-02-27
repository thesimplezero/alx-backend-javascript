// Import the express module, AppController class, and StudentsController class
import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

// Create a new router
const router = express.Router();

// Define a route handler for GET requests to the root URL ('/')
// When the server receives a GET request to '/', it calls the getHomepage method of the AppController class
router.get('/', AppController.getHomepage);

// Define a route handler for GET requests to the '/students' URL
// When the server receives a GET request to '/students', it calls the getAllStudents method of the StudentsController class
router.get('/students', StudentsController.getAllStudents);

// Define a route handler for GET requests to the '/students/:major' URL
// When the server receives a GET request to '/students/:major', it calls the getAllStudentsByMajor method of the StudentsController class
// The ':major' part of the URL is a route parameter, which can be accessed in the getAllStudentsByMajor method through the req.params object
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

// Export the router
export default router;
