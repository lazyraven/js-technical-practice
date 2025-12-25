// Question 5 (Basics – Strings & Loops)
// Write a JavaScript function that:

// Takes a string
// Returns the number of vowels in the string
// (a, e, i, o, u — both uppercase and lowercase)

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello")); // 2
console.log(countVowels("JAVASCRIPT")); // 3
