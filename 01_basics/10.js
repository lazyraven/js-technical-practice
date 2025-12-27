// Question 10 (Basics – Arrays & Frequency Counting)

// Write a JavaScript function that:
// Takes an array of strings
// Returns an object showing how many times each string appears

function countFrequencies(fruits) {
  let count = 0;
  let obj = {};
  for (let char of fruits) {
    // if (obj.hasOwnProperty(char)) {
    obj[char] = count++;
    console.log(obj);

    // }
    // count++;
  }
  console.log(obj);
}
console.log(
  countFrequencies(["apple", "banana", "apple", "orange", "banana", "apple"])
);
// { apple: 3, banana: 2, orange: 1 }
