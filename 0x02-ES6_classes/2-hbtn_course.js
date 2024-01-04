/**
 * Class representing a Holberton course.
 */
export default class HolbertonCourse {
  /**
   * Constructor for the HolbertonCourse class.
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course in weeks.
   * @param {Array} students - An array of strings representing the students in the course.
   * @throws {TypeError} - Throws a TypeError if input types are invalid.
   */
  constructor(name, length, students) {
    // Checking and validating input types.
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw TypeError('Students must be an array of strings');
    }

    // Initializing instance variables.
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Getter for the name of the course.
   * @returns {string} - The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Setter for the name of the course.
   * @param {string} newName - The new name for the course.
   * @throws {TypeError} - Throws a TypeError if the new name is not a string.
   */ 
  set name(newName) {
    // Checking and validating the input type.
    if (typeof newName !== 'string') {
      throw TypeError('Name must be a string');
    }

    // Setting the new name.
    this._name = newName;
  }

  /**
   * Getter for the length of the course.
   * @returns {number} - The length of the course in weeks.
   */
  get length() {
    return this._length;
  }

  /**
   * Setter for the length of the course.
   * @param {number} newLength - The new length for the course in weeks.
   * @throws {TypeError} - Throws a TypeError if the new length is not a number.
   */
  set length(newLength) {
    // Checking and validating the input type.
    if (typeof newLength !== 'number') {
      throw TypeError('Length must be a number');
    }

    // Setting the new length.
    this._length = newLength;
  }

  /**
   * Getter for the array of students in the course.
   * @returns {Array} - An array of strings representing the students in the course.
   */
  get students() {
    return this._students;
  }

  /**
   * Setter for the array of students in the course.
   * @param {Array} newStudents - An array of strings representing the new students in the course.
   * @throws {TypeError} - Throws a TypeError if the new students are not a valid array of strings.
   */
  set students(newStudents) {
    // Checking and validating the input type.
    if (!Array.isArray(newStudents) || !newStudents.every((student) => typeof student === 'string')) {
      throw TypeError('Students must be an array of strings');
    }

    // Setting the new array of students.
    this._students = newStudents;
  }
}
