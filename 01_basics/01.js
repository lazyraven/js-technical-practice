// Question 1 (Very Basic – Variables & Logic)
// Write a JavaScript function that:

// Takes two numbers as input
// Returns the larger number
// If both numbers are equal, return "Both are equal"

function getLargerNumber(a, b) {
  const result = a > b ? a : b > a ? b : "Both are equal";
  return result;
}
console.log(getLargerNumber(5, 10)); // 10
console.log(getLargerNumber(7, 7)); // "Both are equal"
