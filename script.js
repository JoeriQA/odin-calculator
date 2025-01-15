const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const display = document.querySelector("#display");

let displayText = "";
let operator;
let firstNumber = null;
let secondNumber = null;

document.addEventListener("DOMContentLoaded", () => {
  initializeCalculator();
});

function initializeCalculator() {
  updateDisplayText(0);

  numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", () => {
      const number = numberButton.textContent;

      if (displayText === "0") {
        displayText = number;
      } else {
        displayText += number;
      }

      updateDisplayText(displayText);
    });
  });

  operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
      if (operator) {
        secondNumber = Number(displayText.split(" ").pop());
        firstNumber = operate(firstNumber, secondNumber, operator);
        displayText = `${firstNumber} ${operatorButton.textContent} `;
        secondNumber = null;
      } else {
        firstNumber = Number(display.textContent.split(" ")[0]);
        displayText += ` ${operatorButton.textContent} `;
      }
      operator = operatorButton.textContent;
      updateDisplayText(displayText);
    });
  });

  equalsButton.addEventListener("click", () => {
    if (operator) {
      secondNumber = Number(displayText.split(" ").pop());
      firstNumber = operate(firstNumber, secondNumber, operator);
      displayText = firstNumber;
      updateDisplayText(displayText);
      secondNumber = null;
      operator = null;
    }
  });

  clearButton.addEventListener("click", () => {
    displayText = "0";
    firstNumber = null;
    secondNumber = null;
    operator = null;
    updateDisplayText(displayText);
  });
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 == 0) return "lol";
      else return num1 / num2;
    default:
      return num2;
  }
}

function updateDisplayText(text) {
  display.textContent = text;
}
