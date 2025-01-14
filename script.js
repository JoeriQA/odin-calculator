const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    const number = numberButton.textContent;
  });
});
