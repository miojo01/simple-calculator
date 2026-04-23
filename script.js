const display = document.getElementById('display');
const buttons = document.querySelectorAll('.digit-button');

const blockedDigits = ["AC", "%", "backspace", "=", "/", "*", "-", "+"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ["+", "-", "*", "/", "%"];

function calculateExpression() {
    let expression = display.value;
    display.value = eval(expression);
    return display.value;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.dataset.value;
        const ultimo = display.value.slice(-1);

        if (display.value === '') {

            if (blockedDigits.includes(buttonValue)) {
                return;
            }

            if (buttonValue === ".") {
                display.value = "0.";
                return;
            }
        }

        if (buttonValue === "AC") {
            display.value = '';
        }
        else if (buttonValue === "backspace") {
            display.value = display.value.slice(0, -1);
        }
        else if (buttonValue === "%") {
            let expressionResult = calculateExpression();
            let finalResult = expressionResult / 100;
            display.value = finalResult.toFixed(2);
        }
        else if (buttonValue === "=") {
            try {
                calculateExpression();
            }
            catch {
                display.value = 'Erro';
            }
        }
        else if (operators.includes(buttonValue) && operators.includes(ultimo)) {
            display.value = display.value.slice(0, -1) + buttonValue;
            return;
        }
        else {
            display.value += buttonValue;
        }

    });
});