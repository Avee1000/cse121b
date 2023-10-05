// function calculate(a, b, callback) {
//     callback(a + b);
// }
//   function displayResult(result) {
//     console.log('The result is: ' + result);
// }
// calculate(2, 3, displayResult);


// let person = {
//     name: "Antonia Francesca",
//     age: 30,
//     profession: "Software Engineer",
//     hobbies: ["reading", "playing guitar", "hiking"],
//     address: {
//       street: "123 Camino Real",
//       city: "Santa Rosa",
//       country: "Honduras"
//     },
//     isEmployed: true,
//     greet: function() {
//       console.log(`Hello, my name is ${this.name}.`);
//     }
// };
// console.log(person.address.street);

// const person = {
//     name: ["Bob", "Smith"],
//     age: 32,
//     bio: function () {
//       console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//     },
//     introduceSelf: function () {
//       console.log(`Hi! I'm ${this.name[0]}.`);
//     },
// };

const persons = { name: "John", age: 30, job: "Engineer" };
for (let key in persons) {
  console.log(key); // Outputs: "name", "age", "job"
  console.log(persons[key]); // Outputs the corresponding values
};