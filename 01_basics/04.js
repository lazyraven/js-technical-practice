// Question 4 (Basics – Arrays & Loops)
// Write a JavaScript function that:

// Takes an array of numbers
// Returns the largest number in the array
// Do not use Math.max

function findMax(arr) {
  let largestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    // Cleaner and clearer version:
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
    // You don’t need to assign inside the ternary. This part is redundant:
    // largestNum = arr[i] > largestNum ? (largestNum = arr[i]) : largestNum;
  }
  return largestNum;
}
console.log(findMax([3, 7, 2, 9, 5])); // 9
console.log(findMax([10])); // 10
