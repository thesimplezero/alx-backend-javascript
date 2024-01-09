// Calculates and returns the sum of all student IDs in the provided list.
// Utilizes the reduce method with an accumulator and the arrow function to add up the 'id' property of each student object.
export default function getStudentIdsSum(studentList) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue.id;
  return studentList.reduce(reducer, 0);
}
