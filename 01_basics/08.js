// Question 8 (Basics – Conditional Logic & Strings)
// Write a JavaScript function that:

// Takes a string
// Returns "Palindrome" if the string reads the same backward
// Otherwise returns "Not a palindrome"
// Case-sensitive comparison is fine

function checkPalindrome(ele) {
  const palCase = ele.toLowerCase();
  for (let i = 0; i < palCase.length / 2; i++) {
    if (palCase[i] !== palCase[palCase.length - 1 - i]) {
      return "Not a palindrome";
    }
  }
  return "Palindrome";
}
console.log(checkPalindrome("madam")); // "Palindrome"
console.log(checkPalindrome("hello")); // "Not a palindrome"

// ---------- My Solution -----------
// function checkPalindrome(ele) {
//   const palCase = ele.toLowerCase();
//     for (let i = 0; i <= palCase.length; i++) {
//       if (palCase[i] !== palCase[palCase.length - (i + 1)]) {
//         return "Not a palindrome";
//       }
//     }
//   return "Palindrome";
// }
// console.log(checkPalindrome("madam")); // "Palindrome"
// console.log(checkPalindrome("hello")); // "Not a palindrome"

// Note 1 :
// Important correction (this is significant):
// Your loop condition is slightly wrong:
// for (let i = 0; i <= palCase.length; i++)

// Note 2:
// Issues:
// You only need to loop half the string
// <= palCase.length causes unnecessary and invalid comparisons

// Note 3::
// for (let i = 0; i < palCase.length / 2; i++) {
//   if (palCase[i] !== palCase[palCase.length - 1 - i]) {
//     return "Not a palindrome";
//   }
// }

// Why this matters:
// Avoids out-of-bounds access
// Improves performance
// Shows algorithmic thinking (very important in interviews)
