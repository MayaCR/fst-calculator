const display = document.querySelector('.numbers');
const buttons = document.querySelectorAll('.button');
const clearButton = document.querySelector('#clear')
const equalButton = document.querySelector('#equal')
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

function updateDisplay() {

}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        display.textContent += e.target.value;
        if (e.target.id) {
            displayNumber = display.textContent;
            display.textContent = '';
        };
    });
});

clearButton.addEventListener('click', () => {
    display.textContent = '';
    displayNumber = 0;
});

console.log(operate(1, '+', 4));


