/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(number1, number2){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);  
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2){   
    return(number1 - number2);
}

function subtractNumbers(number1, number2){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = (number1, number2) => {
    const multiplyNumber1 = Number(document.querySelector('#factor1').value);
    const multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
};
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;

function divideNumbers(number1, number2){
    const dividend = Number(document.querySelector('#dividend').value);
    const divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);



/* Decision Structure */
function getTotal(){
    let subtotal = Number(document.querySelector('#subtotal').value);
    let isChecked = document.querySelector('#member').checked;
    if (isChecked == true){
        subtotal = subtotal - ( subtotal * 0.20);
    }
    document.querySelector('#total').textContent = `$ ${subtotal.toFixed(2)}`;
}
document.querySelector('#getTotal').addEventListener('click', getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let sourceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').textContent = `${sourceArray}`;
/* Output Odds Only Array */
let isOdd = (index) => (index % 2);

const odds = sourceArray.filter(isOdd);
document.querySelector('#odds').textContent = `${odds}`;
/* Output Evens Only Array */
let isEven = (index) => (index % 2 == 0);

const evens = sourceArray.filter(isEven);
document.querySelector('#evens').textContent = `${evens}`;
/* Output Sum of Org. Array */
let sumArray = (currentTotal, currentValue) => (currentTotal + currentValue);
const sumOfArray = sourceArray.reduce(sumArray);
document.querySelector('#sumOfArray').textContent = `${sumOfArray}`;
/* Output Multiplied by 2 Array */
let productArray = (currentValue) => (currentValue * 2);
const productOfArray = sourceArray.map(productArray);
document.querySelector('#multiplied').textContent = `${productOfArray}`;

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = productOfArray.reduce(sumArray) ;

document.querySelector('#sumOfMultiplied').textContent = `${sumOfMultiplied}`;