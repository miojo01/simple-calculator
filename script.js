const display = document.getElementById('display');
const buttons = document.querySelectorAll('.digit-button');

const blockedDigits = ["AC", "%", "backspace", "=", "/", "*", "-", "+"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.dataset.value;

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

    });
});