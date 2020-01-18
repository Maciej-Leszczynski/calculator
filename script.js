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
            console.log(add(num1, num2));
            break;
        case "-":
            console.log(substract(num1, num2));
            break;
        case "*":
            console.log(multiply(num1, num2));
            break;
        case "/":
            console.log(divide(num1, num2));
            break;
        default:
            console.log("Pick correct operator: +, -, * or /");
    }
}

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerHTML;
        display.innerHTML = value;
    })
})