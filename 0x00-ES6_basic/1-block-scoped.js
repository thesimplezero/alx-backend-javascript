export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;
  
    if (trueOrFalse) {
      const innerTask = true;
      const innerTask2 = false;
      if (innerTask && innerTask2) {
        return [innerTask, innerTask2];
      }
    }
  
    return [task, task2];
  }
  