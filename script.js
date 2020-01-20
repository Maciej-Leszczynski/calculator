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

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return substract(num1, num2);
        case "*":
            result = (num1 === 0 || num2 === 0) ? "You can't multiply by 0" : multiply(num1, num2);
            return Number.isInteger(result) ? result : result.toFixed(1);
        case "/":
            result = divide(num1, num2);
            return Number.isInteger(result) ? result : result.toFixed(1);
        default:
            console.log("Pick correct operator: +, -, * or /");
    }
}

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let result = "";
let operator = "";
let num = "";
Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => {
        let values = button.innerHTML;
        calculate(values);
        display.innerHTML = result;
    })
})

function calculate(value) {
    if (value === "-" || value === "+" || value === "*" || value === "/"){
        if (num !== "") {
            num = operate(operator, Number(num), Number(result));
        } else {
            num = result;
        }
        operator = value;
        result = '';
    } else if (value === "=") {
        if (num !== "" && operator !== "" && result !== ""){
            result = operate(operator, Number(num), Number(result));
            num = result;
        }
    }else if (value === "Clear") {
        result = "";
        num = "";
    } else {
        result += value;
    }
}