// Importing the ClassRoom class from the specified module.
import ClassRoom from './0-classroom';

/**
 * Function to initialize an array of ClassRoom instances with predefined maximum student sizes.
 * @returns {Array} - An array containing initialized ClassRoom instances.
 */
export default function initializeRooms() {
  // Creating instances of ClassRoom with different maximum student sizes.
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);

  // Returning an array of initialized ClassRoom instances.
  return [room1, room2, room3];
}
