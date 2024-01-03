import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [photoData, userData] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${photoData.body} ${userData.firstName} ${userData.lastName}`);
  } catch (error) {
    console.error('Signup system offline:', error); // Log error details
    throw error; // Rethrow for further handling, if needed
  }
}
