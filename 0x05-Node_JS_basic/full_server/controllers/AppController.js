// Export a class named AppController
export default class AppController {
  // Define a static method named getHomepage
  static getHomepage(req, res) {
    // Send a status of 200 (OK) and a message to the client
    res.status(200).send('Hello Holberton School!\n');
  }
}
