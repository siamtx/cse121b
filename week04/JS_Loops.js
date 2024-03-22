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
myInfo.forEach((element)) => document.createElement(<ul>' '</ul>);


// Writea .map() to loop over adn array and output to <ul>.
const mapInfo = myInfo.map((x)) =>document.createElement(<ul>' '</ul>);