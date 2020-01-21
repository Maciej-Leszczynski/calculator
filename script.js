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
            result = multiply(num1, num2);
            return Number.isInteger(result) ? result : result.toFixed(1);
        case "/":
            result = (num2 === 0) ? "You can't divide by 0" : divide(num1, num2);
            // console.log(result);
            if (typeof(result) === String) {
                console.log(result);
                return result;
                // move it to divide function?
            } else {
                return Number.isInteger(result) ? result : result.toFixed(1);
            }
        }
}

const display = document.getElementById("screen-line");
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
    }else if (value === "CE") {
        result = "";
        num = "";
    } else {
        result += value;
    }
}