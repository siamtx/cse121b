/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples').textContent;
const templeList = [];

/* async displayTemples Function */
const displayTemples = (templeList) => {
    templeList.forEach(x => {
        const newArticle = document.createElement("ARTICLE");

        const newH3 = document.createElement("h3");
        newH3.textContent =  templeList[x].templeName;

        const newImage = document.createElement("img");
        newImage.src = templeList[x].imageUrl;
        newImage.alt = templeList[x].location;

        document.querySelector("h3").appendChild(newImage);
        document.querySelector("article").appendChild(newH3);
        
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        if (response.ok){
        const data = await response.json();
        console.log[data];
        }
displayTemples(templeList);
};

/* reset Function */
document.querySelector('article').reset(templeList);

/* filterTemples Function */
function filterTemples(templeList){
    reset();
    const filter = document.querySelector('#filtered').value;
    switch(filter){
        case 0:
            filter = "utah";
            displayTemples.location("#utah");
            break;
        case 1:
            filter = "notutah";
            displayTemples.location("#notutah");
            break;
        case 2:
            filter = "older";
            displayTemples.dedicated > Date.parse('1950');
            break;
        case 3:
            filter = "all";
            displayTemples.location(temples);
            break;

    }
document.querySelector('#filtered').addEventListener('change', () => { filterTemples(templelist) });
};

getTemples();
console.log[templeList];
/* Event Listener */
