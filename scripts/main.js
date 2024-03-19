// copyright year
document.querySelector('#year').textContent = new Date().getFullYear();

// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);


/** 
let firstName = 'Antonia';
let lastName = 'Francesca';

function fullName = (first, last)
{
    return `${first}` `${last}`;
}

const fullName = function (first, last)
{
    return `${first} ${last}`;
}

const fullName = (first, last) => `${first} ${last}`;

document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);
*/
