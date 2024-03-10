/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Tim Howell";
let currentYear = new Date().getFullYear();
let profilePicture = 'images/Tim Howell.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
foodElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
let faveFood = ["Pizza", "Tacos", "Fried Chicken", "Rice", "Beans"];
foodElement.innerHTML +=`<br>${faveFood}`;

let secondFood = "Brownies";
faveFood.push(secondFood);
foodElement.innerHTML +=`<br>${faveFood}`;







