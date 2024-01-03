// Function to execute a math function with error handling and logging
export default function guardrail(mathFunction) {
  // Initialize a queue to store results and messages
  const queue = [];

  // Variable to hold the result of the math function
  let res;

  // Attempt to execute the math function, handling potential errors
  try {
    res = mathFunction();
  } catch (error) {
    // Capture and store any errors
    res = `Error: ${error.message}`;
  }

  // Append both the result (whether successful or error) and a log message to the queue
  queue.push(res);
  queue.push('Guardrail was processed');

  // Return the queue containing both the result and log message
  return queue;
}
