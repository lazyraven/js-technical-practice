// Question 7 (Basics – Arrays & Transformation)
// Write a JavaScript function that:

// Takes an array of numbers
// Returns a new array where each number is doubled
// Do not modify the original array

function doubleArray(arr) {
  let result = [];
  for (let num of arr) {
    result.push(num * 2);
  }
  return result;
}
console.log(doubleArray([1, 2, 3])); // [2, 4, 6]
console.log(doubleArray([])); // []
