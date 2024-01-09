// Exported constant instance of WeakMap named 'weakMap'.
export const weakMap = new WeakMap();

// Exported function queryAPI, which increments the usage count of provided endpoints in the 'weakMap'.
// Throws an error if the usage count exceeds 5, indicating a high endpoint load.
export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
  if (weakMap.get(endpoint) >= 5) {
    throw Error('Endpoint load is high');
  }
}
