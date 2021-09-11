const numbers = document.querySelectorAll(".numberButton");
const currentNumber = document.getElementById("currentNumber");
const decimal = document.getElementById("decimal");
const decimalButton = document.querySelector(".decimalButton");
const resetButton = document.getElementById("resetButton");
const deleteButton = document.getElementById("deleteButton");
const result = document.getElementById("operatorResult");
const operatorButtons = document.querySelectorAll(".operatorButton");
const equals = document.getElementById("equals");

currentNumber.innerHTML = "0";
let storedNumber = "";
let firstNumber = "";
const calcResult = "";
let clickedOperator = "";
let finalResult = "";

//Math functions to return based on which operator the user has entered
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

operatorButtons.forEach((operator) => {
	operator.addEventListener("click", function () {
		if (clickedOperator === "÷" && storedNumber === "0") {
			result.innerHTML = "Nan";
			currentNumber.innerHTML = "Don't Divide By 0";
			setTimeout(resetScreen, 2000);
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

function calculate() {
	const calcResult = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator);
	if (clickedOperator === "÷" && storedNumber === "0") {
		result.innerHTML = calcResult;
		finalResult = calcResult;
	} else {
		result.innerHTML = calcResult + " " + clickedOperator;
		finalResult = calcResult;
	}
}

equals.addEventListener("click", function () {
	if (clickedOperator === "÷" && storedNumber === "0") {
		result.innerHTML = "Nan";
		currentNumber.innerHTML = "Don't Divide By 0";
		setTimeout(resetScreen, 2000);
	}
});

resetButton.addEventListener("click", resetScreen());

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






