/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {    
    temples.forEach((temple) => {
        const newTemple = document.createElement("article");

        const newH3 = document.createElement("h3");
        newH3.textContent =  temple.templeName;

        const newImage = document.createElement("img");
        newImage.src = temple.imageUrl;
        newImage.alt = temple.location;

        newTemple.appendChild(newH3);
        newTemple.appendChild(newImage);
        templesElement.appendChild(newTemple);
        
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok ){
        templeList = await response.json();
        displayTemples(templeList);
    }
    else (
        console.error(response)
    )
};

/* reset Function */
let reset = () => {
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
};

/* filterTemples Function */
function filterTemples(templeList){
    reset();
    let tl = [];
    const filter = document.querySelector('#filtered').value;
    switch(filter){
        case 'utah':
            tl = templeList.filter((temple) => temple.location.toLowerCase().includes('utah'));
            displayTemples(tl);
            break;
        case 'notutah':
            tl = templeList.filter((temple) => !temple.location.toLowerCase().includes('utah'));
            displayTemples(tl);          
            break;
        case 'older':
            tl = templeList.filter((temple) => Date.parse(temple.dedicated) < Date.parse('1950, 1,1'));
            displayTemples(tl);
            break;
        case 'all':
            displayTemples(templeList);
            break;

    }
};

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });