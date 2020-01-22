// Variables
const display = document.getElementById("screen-line");
const buttons = document.querySelectorAll("button");
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let result = "";
let operator = "";
let num = "";
let displayedValue = "";


// Math operations 
function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}


// Operate function to pick correct operation
function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return substract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            if (num2 === 0) {
                return "Don't divide by 0!"
            } else {
                return divide(num1, num2);
            }
        }
    }

// Button reactions
function calculate(value) {
    if (value === "=") {
        if (num !== "" && operator !== "" && result !== ""){
            result = operate(operator, Number(num), Number(result));
            num = result;
            displayedValue = result;
            result = "";
        }
    } else if (value==='+' || value==='-' || value==='*' || value ==='/') {
        if (num !== "") {
            num = operate(operator, Number(num), Number(result));
            displayedValue = "" + String(num) + value;
        } else {
            num = result;
            displayedValue += value;
        }
        operator = value;
        result = '';    
    } else if (value in numbers) {
        result += value;
        displayedValue += value;    
    } else if (value === "Clear") {
        result = "";
        num = "";
        displayedValue = "";
    } else if (value === ".") {
        if (!(displayedValue.includes("."))) {
            result += value;
            displayedValue += value;
        }
    }
}

Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => {
        let values = button.innerHTML;
        console.log(typeof values);
        console.log(values)
        calculate(values);
        display.innerHTML = displayedValue;
    })
})

// TO DO:
// rounding
// more style
// bug after mult, div
// backspace