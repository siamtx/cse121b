/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Tim Howell";
let currentYear = '2024';
let profilePicture = 'images/Tim Howell.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.querySelector('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('profilePicture');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
foodElement.textContent = `currentYear`;
imageElement.setAttribute("images/Tim Howell.jpg", profilePicture);
imageElement.setAttribute('alt', "Profile image of [profilePicture");


/* Step 5 - Array */
let food = ["Pizza", "Tacos", "Fried Chicken", "Rice", "Beans"];
let secondFood = "Brownies";
food.push(`${secondFood}`);





