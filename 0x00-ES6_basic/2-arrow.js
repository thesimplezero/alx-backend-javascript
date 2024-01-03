// Exports a function to manage a list of San Francisco neighborhoods
export default function getNeighborhoodsList() {
  // Initialize the list of neighborhoods with two initial values
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
 
  // Create a reference to the current object (this) to avoid scoping issues
  const self = this;
 
  // Define a method to add a new neighborhood to the list
  this.addNeighborhood = (newNeighborhood) => {
    // Add the new neighborhood to the list
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
 
    // Return the updated list of neighborhoods
    return self.sanFranciscoNeighborhoods;
  };
 }
 