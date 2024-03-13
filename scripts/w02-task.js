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
/* Step 5.1 Declare an array */
let faveFood = ["Pizza", " Tacos", " Fried Chicken", " Rice", " Beans"];
/* Step 5.2 Display array */
foodElement.innerHTML +=`<br>${faveFood}`;
/* Step 5.3 Additional food variable */
let secondFood = " Brownies";
/* Step 5.4 Add new food item to the array */
faveFood.push(secondFood);
/* Step 5.5 Display new array */
foodElement.innerHTML +=`<br>${faveFood}`;
/* Step 5.6 Remove first element of array */
faveFood.shift();
/* Step 5.7 Display modified array; first element removed */
foodElement.innerHTML +=`<br>${faveFood}`;
/* Step 5.8 Remove last element in array */
faveFood.pop();
/* Step 5.9 Display array with first and last elements missing */
foodElement.innerHTML +=`<br>${faveFood}`;







