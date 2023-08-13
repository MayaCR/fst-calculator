const display = document.querySelector('.numbers');
const buttons = document.querySelectorAll('.button')
let firstNum = 0; 
let secondNum = 0; 
let operator = '';
let displayNumber = 0;

function addition (firstNum, secondNum) {
    return firstNum + secondNum;
};

function subtraction (firstNum, secondNum) {
    return firstNum - secondNum;
};

function multiply (firstNum, secondNum) {
    return firstNum * secondNum;
};

function divide (firstNum, secondNum) {
    return firstNum / secondNum;
};

function operate (firstNum, operator, secondNum) {
    return operator === '+' ? addition(firstNum, secondNum) :
    operator === '-' ? subtraction(firstNum, secondNum) :
    operator === '*' ? multiply(firstNum, secondNum) :
    operator === '/' ? divide(firstNum, secondNum) : 'Error';
};

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        display.textContent += e.target.value;
    });
});

console.log(operate(1, '+', 4));


