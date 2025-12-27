// Question 9 (Basics – Objects & Logic)
// Write a JavaScript function that:

// Takes an object with numeric values
// Returns the sum of all the values

function sumObjectValues(obj) {
  let result = 0;
  for (let key in obj) {
    // a safer version would check:
    if (obj.hasOwnProperty(key)) {
      result = result + obj[key];
    }
  }
  return result;
}
console.log(sumObjectValues({ a: 10, b: 20, c: 5 })); // 35
console.log(sumObjectValues({})); // 0
