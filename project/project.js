

/* declare and instantiate global variables */
const containerForHeadlines = document.querySelector('#headlines');
let newsList = [];

/* async displayTemples Function */
const displayNews = (list) => {    
    list.forEach((item) => {
        const newlistItem = document.createElement("article");
      
        const newH3 = document.createElement("h3");
        const newPara = document.createElement("p");
        newH3.textContent =  item.title;
        newPara.textContent = ` Summary: ${item.summary}`;

        const anchor = document.createElement('a');
        anchor.href = item.url;
        anchor.target = "_blank";
        anchor.textContent = "FOR MORE INFORMATION CLICK HERE";

        
        newlistItem.appendChild(newH3);
        newlistItem.appendChild(newPara);
        newlistItem.appendChild(anchor);
        containerForHeadlines.appendChild(newlistItem);
        
        
    });
};

/* async getTemples Function using fetch()*/
const getHeadlines = async () => {
    const response = await fetch("https://api.spaceflightnewsapi.net/v4/reports/?limit=100");
    if (response.ok ){
        let space = await response.json();
        newsList = space.results;
        console.log(newsList);
        displayNews(newsList);
    }
    else (
        console.error(response)
    )
};

getHeadlines();