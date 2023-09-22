/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Idahosa-Sunny";
console.log(`Name: ${fullName}`);

const currentYear = new Date();
const year = currentYear.getFullYear();
console.log(`${year}`);

const profilePicture = 'images/me.jpg';
const nameElement = document.getElementById('name');
nameElement.innerHTML = `<strong>${fullName}</strong>`;

const foodElement = document.getElementById('food');
let list = ["Rice", "Eggs", "Toast", "Bread", "Salad"];
let food = [...list]; 
foodElement.textContent = food;

let newFood = "Spaghetti";
food.push(newFood);
foodElement.innerHTML += `<br>${food}`

let newFood1= "Pancake";
food.push(newFood1);
foodElement.innerHTML += `<br>${food}`

let newFood2= "Hotdogs";
food.push(newFood2);
foodElement.innerHTML += `<br>${food}`

food.shift();
foodElement.innerHTML += `<br>${food}`

food.pop();
foodElement.innerHTML += `<br>${food}`

const yearElement = document.getElementById('year');
yearElement.textContent = year

const imageElement = document.getElementsByTagName('img')
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `profile image of ${fullName}`);

// Get a list of all stylesheets on the page and convert it to an array
const stylesheets = [...document.styleSheets];

// Use forEach to loop through the stylesheets
stylesheets.forEach(function (stylesheet, index) {
  // Print the href (URL) of the stylesheet
  console.log(`Stylesheet ${index + 1} URL: ${stylesheet.href}`);
});

/* Step 3 - Element Variables */





/* Step 4 - Adding Content */






/* Step 5 - Array */






