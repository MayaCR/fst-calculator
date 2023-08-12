let firstNum = 0, secondNum = 0, operator = '';

function addition (firstNum, secondNum) {
    return firstNum + secondNum
}

function subtraction (firstNum, secondNum) {
    return firstNum - secondNum
}

function multiply (firstNum, secondNum) {
    return firstNum * secondNum
}

function divide (firstNum, secondNum) {
    return firstNum / secondNum
}

function operate (firstNum, operator, secondNum) {
    return operator === '+' ? addition(firstNum, secondNum) :
    operator === '-' ? subtraction(firstNum, secondNum) :
    operator === '*' ? multiply(firstNum, secondNum) :
    operator === '/' ? divide(firstNum, secondNum) : 'Error'
}

console.log(operate(1, '+', 4))


