/**
 * Class representing a HolbertonClass.
 */
export class HolbertonClass {
  /**
   * Constructor for the HolbertonClass.
   * @param {number} year - The year of the class.
   * @param {string} location - The location of the class.
   */
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  /**
   * Getter for the year of the class.
   * @returns {number} - The year of the class.
   */
  get year() {
    return this._year;
  }

  /**
   * Getter for the location of the class.
   * @returns {string} - The location of the class.
   */
  get location() {
    return this._location;
  }
}

/**
 * Class representing a StudentHolberton.
 */
export class StudentHolberton {
  /**
   * Constructor for the StudentHolberton.
   * @param {string} firstName - The first name of the student.
   * @param {string} lastName - The last name of the student.
   * @param {HolbertonClass} holbertonClass - The HolbertonClass instance associated with the student.
   */
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  /**
   * Getter for the full name of the student.
   * @returns {string} - The full name of the student.
   */
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
   * Getter for the associated HolbertonClass instance.
   * @returns {HolbertonClass} - The associated HolbertonClass instance.
   */
  get holbertonClass() {
    return this._holbertonClass;
  }

  /**
   * Getter for the full student description, including full name, year, and location.
   * @returns {string} - The full student description.
   */
  get fullStudentDescription() {
    const { year, location } = this._holbertonClass;
    return `${this.fullName} - ${year} - ${location}`;
  }
}

// Instances of HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Instances of StudentHolberton
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

/**
 * Array containing instances of StudentHolberton.
 * @type {Array<StudentHolberton>}
 */
export const listOfStudents = [student1, student2, student3, student4, student5];
