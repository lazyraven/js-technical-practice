// Question 10 (Basics – Arrays & Frequency Counting)

// Write a JavaScript function that:
// Takes an array of strings
// Returns an object showing how many times each string appears

function countFrequencies(fruits) {
  let obj = {};
  for (let char of fruits) {
    obj[char] = (obj[char] || 0) + 1;
  }
  return obj;
}
console.log(
  countFrequencies(["apple", "banana", "apple", "orange", "banana", "apple"])
);
// { apple: 3, banana: 2, orange: 1 }

// result[word] = (result[word] || 0) + 1;
// What it represents
// If result[word] already exists → increase it by 1
// If it does NOT exist → treat it as 0, then set it to 1

// || checks falsy values

// Step-by-step

//1. result[word]
// undefined for first occurrence
// a number for later occurrences

//2. (result[word] || 0)
// If result[word] is truthy (e.g., 2) → use it
// If undefined → fallback to 0

//3. + 1
// Increment count

const result = {};
const word = "apple";

result[word] = (result[word] || 0) + 1;
// undefined || 0 → 0 + 1 → 1

result[word] = (result[word] || 0) + 1;
// 1 || 0 → 1 + 1 → 2
