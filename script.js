const display = document.getElementById('display');
const buttons = document.querySelectorAll('.digit-button');

const bloqueados = ["AC", "%", "backspace", "=", "/", "*", "-", "+"]

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.dataset.value;

        if (display.value === '') {

            if (bloqueados.includes(buttonValue)) {
                return;
            }

            if (buttonValue === ".") {
                display.value = "0.";
                return;
            }
        }

        display.value += value;
    });
});