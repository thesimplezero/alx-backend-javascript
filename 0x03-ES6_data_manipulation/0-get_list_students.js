// ES6 default export of a function that retrieves a list of student objects with specified attributes.
// Each object includes an id, firstName, and location, representing student information.
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
