// function that iterates through objects. the fnction's parameter is the return value from the previous function

export default function iterateThroughObject(reportWithIterator) {
  // code here
  let result = [];
  for (let item of reportWithIterator) {
    result.push(item);
  }
  return result;
}
