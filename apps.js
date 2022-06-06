const numbers = document.querySelectorAll(".numberButton");
const currentNumber = document.getElementById("currentNumber");
const decimal = document.getElementById("decimal");
const decimalButton = document.querySelector(".decimalButton");
const resetButton = document.getElementById("resetButton");
const deleteButton = document.getElementById("deleteButton");
const result = document.getElementById("operatorResult");
const operatorButtons = document.querySelectorAll(".operatorButton");
const equals = document.getElementById("equals");

// Initialization of variables
currentNumber.innerHTML = "0";
let storedNumber = "";
let firstNumber = "";
const calcResult = "";
let clickedOperator = "";
let finalResult = "";

//Math functions
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

//Function that takes in two numbers and an operator
function operate(num1, num2, operator) {
	switch (operator) {
		case "+":
			return add(num1, num2);
		case "-":
			return subtract(num1, num2);
		case "x":
			return multiply(num1, num2);
		case "÷":
			return divide(num1, num2);
	}
}

// Shows the current number that the user has entered
numbers.forEach((number) => {
	number.addEventListener("click", function () {
		if (currentNumber.innerHTML.includes(".") && this.innerHTML === ".") {
			return;
		}
		if (currentNumber.innerHTML === "0") {
			currentNumber.innerHTML = "";
		}
		if (clickedOperator === "") {
			storedNumber += this.innerHTML;
			currentNumber.innerHTML = storedNumber;
		} else if (clickedOperator && !firstNumber) {
			firstNumber = result.innerHTML.slice(0, -2);
			storedNumber = this.innerHTML;
			currentNumber.innerHTML = storedNumber;
		} else {
			storedNumber += this.innerHTML;
			currentNumber.innerHTML = storedNumber;
		}
	});
});

//Updates the operator button that is clicked
operatorButtons.forEach((operator) => {
	operator.addEventListener("click", function () {
		if (clickedOperator === "÷" && storedNumber === "0") {
			result.innerHTML = "Nan";
			currentNumber.innerHTML = "Don't Divide By 0";
			setTimeout(resetScreen, 2000);
		} else if (!clickedOperator && firstNumber) {
			clickedOperator = this.innerHTML;
			result.innerHTML = firstNumber + " " + clickedOperator;
		} else if (clickedOperator && storedNumber) {
			calculate();
			clickedOperator = this.innerHTML;
			result.innerHTML = finalResult + " " + clickedOperator;
			storedNumber = "";
			currentNumber.innerHTML = "";
			firstNumber = result.innerHTML.slice(0, -2);
		} else if (clickedOperator && !storedNumber) {
			clickedOperator = this.innerHTML;
			result.innerHTML = firstNumber + " " + clickedOperator;
		} else {
			firstNumber = storedNumber;
			storedNumber = "";
			clickedOperator = this.innerHTML;
			result.innerHTML = firstNumber + " " + clickedOperator;
			currentNumber.innerHTML = "";
		}
	});
});

//Takes the two numbers and calculates them based on which operator the user has entered
function calculate() {
	const calcResult = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator);
	if (calcResult === 0) {
		setTimeout(resetScreen, 1000);
	}
	result.innerHTML = Math.round(calcResult * 100) / 100 + " " + clickedOperator;
	finalResult = Math.round(calcResult * 100) / 100;
}

//Will calculate if two numbers are input as well as an operator
equals.addEventListener("click", function () {
	if (clickedOperator === "÷" && storedNumber === "0") {
		result.innerHTML = "Nan";
		currentNumber.innerHTML = "Don't Divide By 0";
		setTimeout(resetScreen, 2000);
	} else if (storedNumber && !clickedOperator && !firstNumber) {
		return;
	} else if (storedNumber && clickedOperator) {
		calculate();
		result.innerHTML = finalResult;
		clickedOperator = "";
		storedNumber = "";
		currentNumber.innerHTML = storedNumber;
		firstNumber = finalResult;
	}
});

//Resets the page and all of the variables
resetButton.addEventListener("click", resetScreen);

//Deletes one character off of the current number on screen
deleteButton.addEventListener("click", function () {
	storedNumber = storedNumber.slice(0, -1);
	currentNumber.innerHTML = storedNumber;
});

function resetScreen() {
	storedNumber = "";
	finalResult = "";
	firstNumber = "";
	clickedOperator = "";
	result.innerHTML = "";
	currentNumber.innerHTML = "0";
}