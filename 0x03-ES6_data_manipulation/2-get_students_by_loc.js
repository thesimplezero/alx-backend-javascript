// Retrieves students from an array based on a specified location.
// Accepts an array of student objects and a city as arguments.
export default function getStudentsByLocation(students, city) {
  const studentsByLocation = students.filter((student) => student.location === city);
  return studentsByLocation;
}
