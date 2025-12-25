// Question 6 (Basics – Arrays & Counting)

// Write a JavaScript function that:
// Takes an array of numbers
// Returns how many numbers are greater than 0

function countPositive(arr) {
  let count = 0;
  for (let num of arr) {
    if (num > 0) {
      count++;
    }
  }
  return count;
}
console.log(countPositive([1, -2, 3, 0, 5, -1])); // 3
console.log(countPositive([-1, -5, 0])); // 0
