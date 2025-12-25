// Question 2 (Basics – Conditions & Numbers)
// Write a JavaScript function that:

// Takes one number as input
// Returns:
// "Positive" if the number is greater than 0
// "Negative" if the number is less than 0
// "Zero" if the number is 0

function checkNumber(num) {
  const result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
  return result;
}
console.log(checkNumber(5)); // "Positive";
console.log(checkNumber(-3)); // "Negative"
console.log(checkNumber(0)); // "Zero"
