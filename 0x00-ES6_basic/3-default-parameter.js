// Calculates the sum of three numbers, with optional default values for expansions.
export default function getSumOfHoods(
  initialNumber,
  expansion1989 = 89, // Expansion value for 1989 (defaults to 89)
  expansion2019 = 19  // Expansion value for 2019 (defaults to 19)
) {
  return initialNumber + expansion1989 + expansion2019;
}
