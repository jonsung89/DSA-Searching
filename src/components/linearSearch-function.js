// Linear Search
// Loop through an array, checking each value until you find one which matches
// Provide a message and indicate how many searches it took


function linearSearch(array, value) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count++;
    if (array[i] == value) {
      return {count, index: i}; 
    }
  }
  return {count, index: -1};
}

module.exports = linearSearch;