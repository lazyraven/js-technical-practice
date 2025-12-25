// Question 3 (Basics – Loops & Counting)
// Write a JavaScript function that:

// Takes one number n
// Returns the sum of all numbers from 1 to n
// Assume n is a positive integer

function sumUpTo(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
    // 0 = 0 + 1
    // 1 = 1 + 2
    // 3 = 3 + 3
    // 6 = 6 + 4
    // 10 = 10 + 5
  }
  return result;
}
console.log(sumUpTo(5)); // 15  (1 + 2 + 3 + 4 + 5)
console.log(sumUpTo(1)); // 1
