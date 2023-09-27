function gpaPoints(grade) {
    let gpaPoints = 0;
    switch (grade) {
      case "A":
        gpaPoints = 4;
            break
      // break removed
      case "B":
        gpaPoints = 3;
        break;
        case "C":
            gpaPoints = 2;
            break;
      default:
        gpaPoints = -1;
    }
    return gpaPoints;
  }
  
  gpaPoints("A"); // returns 3!
  gpaPoints("B"); // also returns 3
  gpaPoints("C"); // returns -1!
  gpaPoints("X"); //
  

////////////////////////////////////////////
const num = function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
  }
}
console.log(num(5));


////////////////////////////////////////////
const numb = function countdown(number) {
    if (number <= 0) {
      console.log("Blastoff!");
    } else {
      console.log(number);
      return countdown(number - 1); // This is where the function calls itself with a smaller number.
  }
}
console.log(numb(10));


/////////////////////////////////////////////function declaration
// let firstName = 'Antonia';
// let lastName = 'Francesca';

// function fullName(first, last) {
//   console.log(`${first} ${last}`);
// }

// fullName(firstName, lastName);


/////////////////////////////////////////////function expression
// let firstNames= 'Antonia';
// let lastNames = 'Francesca';

// const nam = function(first, last) {
//   return `${first} ${last}`;
// }
// console.log(nam(firstNames, lastNames));


/////////////////////////////////////////////arrow function
let firstNames= 'Antonia';
let lastNames = 'Francesca';

const nam = ((first, last) => `${first} ${last}`);

console.log(nam(firstNames, lastNames));


////////////////////////////////////////////.filter()
//checking for letters in elements of an array
let names = ["Nancy", "Blessing", "Jorge", "Svetlana", "Bob"];

// const firstLetter = names.filter((n) => {
//   // Check if the name has at least two characters
//   if (n.length >= 2) {
//     // Access the first character
//     const first = n[0].toLowerCase();
//     //check if the first letter is B
//     return first === "b"
//   }
// });
// console.log(firstLetter);
///////////////////////////////////////////
//// OR USE ////////////////////
let namesB = names.filter(n => n.charAt(3).toUpperCase() === "S");
console.log(namesB);


//////////////////////////////////////////.map()
let namesLength = names.map((n) => n.length);
console.log(namesLength);


//////////////////////////////////////////
let average = names.reduce((accumulator, n) => {
  return accumulator + n.length;
}, 0);

const arrayAverage = average / names.length;
console.log(arrayAverage);
///////////////////////////////////////////
let scores = [56, 78, 95, 77, 65, 86];
let target = scores.indexOf(87);

console.log(target);