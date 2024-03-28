/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Timothy Howell',
    photo: '../images/Tim Howell.jpg',
    favoriteFoods: [
        'pizza', 
        'brownies', 
        'fried pork chops', 
        'brisket', 
        'black-eyed peas' 
    ],
    hobbies: [
        'doing my homework',
        'golf',
        'landscaping',
        'wood working'
    ],
    placesLived: [],

};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place: 'Walterboro, SC',
    length: '18 years'
});

myProfile.placesLived.push({
    place: 'Defuniak Springs, FL',
    length: '3 years'
});

myProfile.placesLived.push({
    place: 'Paris Island SC',
    length: '4 months'
});

myProfile.placesLived.push({
    place: 'Fort Leonard Wood, MO',
    length: '6 months'
});

myProfile.placesLived.push({
    place: 'Rexburg, ID',
    length: '1 year'
});




/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name; 
/* Photo with attributes */
const photo = document.querySelector('#photo');
photo.src = myProfile.photo;
photo.alt = myProfile.name;

/* Favorite Foods List*/
for (let i = 0; i < myProfile.favoriteFoods.length; i++)
{
    const newLi = document.createElement("li");
    newLi.textContent = myProfile.favoriteFoods[i];
    document.querySelector('#favorite-foods').appendChild(newLi);
}


/* Hobbies List */
for (let j = 0; j < myProfile.hobbies.length; j++)
{
    const newLi = document.createElement("li");
    newLi.textContent = myProfile.hobbies[j];
    document.querySelector('#hobbies').appendChild(newLi);
}

/* Places Lived DataList */
for (let x = 0; x < myProfile.favoriteFoods.length; x++)
{
    const newDd = document.createElement("dd");
    const newDt = document.createElement("dt");
    newDd.textContent = myProfile.placesLived[x].length;
    newDt.textContent = myProfile.placesLived[x].place;
    document.querySelector('#places-lived').appendChild(newDt);
    document.querySelector('#places-lived').appendChild(newDd);
}

