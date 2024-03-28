// JS_Loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };



// Write a .forEach() to loop over an array and output to <ul>.

//const foodsElement = document.querySelector('#favorite-foods');
//function createAndAppendFoodItem(food){
//  let favoriteFood = document.createElement('li');
//  favoriteFood.textContent = food;
//  foodsElement.appendChild(favoriteFood);
//}
//myInfo.favoriteFoods.forEach(createAndAppendFoodItem);


// Writea .map() to loop over adn array and output to <ul>.
const foodsElement = document.querySelector('#favorite-foods');
mapFoodItem(food) {
  let favoriteFood = document.createElement('li');
  favoriteFood.textContent = food;
  return favoriteFood;
} 
const foodListElements = myInfo.favoriteFoods.map(map.FoodItem);

foodsElement.innerHTML = foodListElements.join();
