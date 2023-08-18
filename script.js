const display = document.querySelector('.numbers');
const buttons = document.querySelectorAll('.button');

let firstNum = null; 
let secondNum = null; 
let operator = null;
let displayNumber = '';

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

function calculate(firstNum, operator, secondNum) {
    let solution;

    switch (operator) {
        case 'add':
            solution = addition(firstNum, secondNum);
            break;
        case 'subtract':
            solution = subtraction(firstNum, secondNum);
            break;
        case 'multiply':
            solution = multiply(firstNum, secondNum);
            break;
        case 'divide':
            solution = divide(firstNum, secondNum);
            break;
        default: 
            'Error'
    }; 
    return solution = displayNumber;
};

function updateDisplay() {
    display.textContent = displayNumber;
}

function getValues() {
    if (firstNum === null) {
        firstNum = displayNumber;
        displayNumber = '';
    } else if (firstNum !== null) {
        secondNum = displayNumber;
        updateDisplay();
    };
};

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        displayNumber += e.target.value;
        updateDisplay();
        
        operator = e.target.id;
        
        let solution;
        
        switch(operator) {
            case 'add':
                getValues()
                console.log('firstNum: ' + firstNum);
                console.log(operator)
                console.log('secondNum: ' + secondNum);
                solution = calculate(firstNum, operator, secondNum);
                console.log(solution)
                break;
            case 'equal':
                solution = calculate(firstNum, operator, secondNum);
                console.log(solution);
                break;
            case 'clear':
                displayNumber = '';
                firstNum = null;
                secondNum = null;
                operator = null;
                updateDisplay();
                break;
        };
    });
});
