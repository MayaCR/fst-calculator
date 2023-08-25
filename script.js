const display = document.querySelector('.numbers');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const deleteButton = document.querySelector('#delete');
const clearButton = document.querySelector('#clear');

let firstNum = null; 
let secondNum = null; 
let prevOperator = null;
let operator = null;
let displayNumber = 0;
let total = 0;

function addition(firstNum, secondNum) {
    return firstNum + secondNum;
};

function subtraction(firstNum, secondNum) {
    return firstNum - secondNum;
};

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
};

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
};

// takes values as arguments and performs the operation
function calculate(firstNum, operator, secondNum) {
    let operation;

    switch (operator) {
        case 'add':
            operation = addition(firstNum, secondNum);
            break;
        case 'subtract':
            operation = subtraction(firstNum, secondNum);
            break;
        case 'multiply':
            operation = multiply(firstNum, secondNum);
            break;
        case 'divide':
            if (secondNum === 0) {
                operation = 'Invalid';
            } else {
                operation = divide(firstNum, secondNum);
            };
            break;
        default: 
            operation = 'Error';
            break;
    }; 
    return operation;
};

function updateDisplay() {
    if (displayNumber === 0 && firstNum !== null) {
        display.textContent = firstNum;
    } else if (secondNum !== null) {
        display.textContent = total;
    } else {
        display.textContent = displayNumber;
    };
};

// stores clicked numbers into variables
function getValues() {
    if (firstNum === null) {
        firstNum = Number(displayNumber);
        displayNumber = 0;
    } else if (firstNum !== null) {
        secondNum = Number(displayNumber);
    };

    console.log(`firstNum: ${firstNum}`)
    console.log(`secondNum: ${secondNum}`)
    console.log(`operator: ${operator}`)
};

// changes/updates display based on which numbers are clicked
numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let number = e.target.value;

        if (displayNumber === 0) {
            displayNumber = number;
        } else {
            displayNumber += number;
        };
        updateDisplay();
    });
});

// tracks which operator has been clicked & performs calculation
operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (firstNum === null) {
            operator = e.target.id;
        } else if (firstNum !== null && operator === null) {
            prevOperator = operator;
        };

        switch(operator) {
            case 'add':
            case 'subtract':
            case 'multiply':
            case 'divide':
                getValues();
                total = calculate(firstNum, operator, secondNum);
                console.log(`total: ${total}`)
                break;
            case 'equal':
                getValues();
                total = calculate(firstNum, prevOperator, secondNum);
                break;
        };
        updateDisplay();
    });
});

clearButton.addEventListener('click', () => {
    firstNum = null;
    secondNum = null;
    prevOperator = null;
    operator = null;
    displayNumber = 0;
    total = 0;
    updateDisplay();
});