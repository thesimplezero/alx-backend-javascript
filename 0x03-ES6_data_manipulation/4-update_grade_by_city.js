// Optimized and production-ready function that updates student grades based on the provided city and new grade data.
// Accepts a function getListStudents, a city string, and an array of newGrades objects as parameters.
export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const students = getListStudents().filter((student) => student.location === city);

  const updatedStudents = students.map((student) => {
    const matchingGrade = newGrades.find((newGrade) => newGrade.studentId === student.id);
    const newStudent = { ...student, grade: matchingGrade ? matchingGrade.grade : 'N/A' };
    return newStudent;
  });

  return updatedStudents;
}
