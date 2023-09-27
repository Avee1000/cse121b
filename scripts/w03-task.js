/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
// ................................................................
// (num1, num2) => {
//     return num1 + num2;
// } 
//.................................................................
function add(num1, num2) {
    return num1 + num2;
}

function addNumbers() {
    let addNumbers1 = Number(document.querySelector('#add1').value);
    let addNumbers2 = Number(document.querySelector('#add2').value);
    const sum = add(addNumbers1, addNumbers2);

    const sumHolder = document.querySelector('#sum');
    sumHolder.value = sum;
}
document.getElementById('addNumbers').addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers *////////////using FUNCTION EXPRESSION
const subtract = function (subNum1, subNum2) {
    return subNum1 - subNum2;
}

const subtractNumbers = function () {
    let subNumbers1 = Number(document.querySelector('#subtract1').value);
    let subNumbers2 = Number(document.querySelector('#subtract2').value);
    const difference = subtract(subNumbers1, subNumbers2);

    const diffHolder = document.querySelector('#difference');
    diffHolder.value = difference;
}
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (num1, num2) => {
    return num1 * num2;
}

const multiplyNumbers = () => {
    let factor1 = Number(document.getElementById('factor1').value);
    let factor2 = Number(document.getElementById('factor2').value);
    const product = multiply(factor1, factor2);

    const productHolder = document.getElementById('product');
    productHolder.value = product;
}
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (num1,num2) => {
    return num1 / num2;
}
document.getElementById('divideNumbers').addEventListener('click', () => {
    let dividend = Number(document.getElementById('dividend').value);
    let divisor = Number(document.getElementById('divisor').value);
    const quotient = divide(dividend, divisor);

    document.getElementById('quotient').value = quotient;
});

/* Decision Structure */
const currentYear = new Date();
const year = currentYear.getFullYear();

document.getElementById('year').textContent = year;

/* ARRAY METHODS - Functional Programming */
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */
document.getElementById('array').textContent = array;
/* Output Odds Only Array */
const oddNumberArray = array.filter(n => {
    return n % 2 === 1;
});
document.getElementById('odds').textContent = oddNumberArray;

/* Output Evens Only Array */
const EvenNumberArray = array.filter(n => {
    return n % 2 === 0;
});
document.getElementById('evens').textContent = EvenNumberArray;

/* Output Sum of Org. Array */
const addedArray = array.reduce((accumulator, n)  => {
    return accumulator + n;
}, 0);
document.getElementById('sumOfArray').textContent = addedArray;

/* Output Multiplied by 2 Array */
const multipliedArray = array.map((n)  => {
    return n*2;
});
document.getElementById('multiplied').textContent = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
document.getElementById('sumOfMultiplied').textContent = multipliedArray.reduce((accumulator, n) => {
    return accumulator + n;
},0);
