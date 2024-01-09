// function that will take into argument a report object created with a previous function

export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees);
  const array = [];
  for (const i of employees) {
    array.push(...i);
  }
  return array;
}
