/**
 * Calculates and returns the sum of student IDs in the provided list.
 * @param {Array} students - An array of student objects.
 * @returns {number} - The sum of student IDs.
 */
export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => student.id + sum, 0);
}
