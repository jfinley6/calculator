const numbers = document.querySelectorAll(".numberButton");
const currentNumber = document.getElementById("currentNumber");
const decimal = document.getElementById("decimal");
const decimalButton = document.querySelector(".decimalButton");
const resetButton = document.getElementById("resetButton");
const deleteButton = document.getElementById("deleteButton");
const result = document.getElementById("operatorResult");
const operatorButtons = document.querySelectorAll(".operatorButton");
const equals = document.getElementById("equals");

let operatorArr = [];
let a = "";
let b = "";

//Math functions to return based on which operator the user has entered
myFunctions = [
	function (a, b) {
		return a + b;
	},
	function (a, b) {
		return a - b;
	},
	function (a, b) {
		return a / b;
	},
	function (a, b) {
		return a * b;
	},
];

// Shows the current number that the user has entered
for (number of numbers) {
	number.addEventListener("click", function () {
		if (currentNumber.innerHTML === "0") {
			currentNumber.innerHTML = "";
		}
		currentNumber.innerHTML += this.innerHTML;
	});
}

for (operatorButton of operatorButtons) {
	operatorButton.addEventListener("click", function () {
		//prevents the user from entering multiple operators in a row
		if (operatorArr[0] && currentNumber.innerHTML == "") {
			return;
		} else {
			operatorArr.push(this.innerHTML);
		}
		//if user ends number with a decimal the output will slice the decimal off
		if (currentNumber.innerHTML.endsWith(".")) {
			result.innerHTML = currentNumber.innerHTML.slice(0, -1) + " " + this.innerHTML;
			currentNumber.innerHTML = "";
		} else {
			result.innerHTML = currentNumber.innerHTML + " " + this.innerHTML;
			currentNumber.innerHTML = "";
		}
	});
}

for (operatorButton of operatorButtons) {
	operatorButton.addEventListener("click", function () {
		if (!a) {
			a = parseFloat(result.innerHTML.slice(0, -1));
		} else if (a && !b) {
			b = parseFloat(result.innerHTML.slice(0, -1));
		} else if (a && b) {
			b = parseFloat(result.innerHTML.slice(0, -1));
		}
		if (a && b && result.innerHTML) {
			result.innerHTML += ` ${this.innerHTML}`;
		}
	});
}

decimalButton.addEventListener("click", decimalScreen);
resetButton.addEventListener("click", reset);
deleteButton.addEventListener("click", deleteScreen);
equals.addEventListener("click", mathOperation);

//Prevents user from entering multiple decimals
function decimalScreen() {
	if (currentNumber.innerHTML.includes(".")) {
		return;
	} else {
		currentNumber.innerHTML += decimal.innerHTML;
	}
}

//Resets the calculator for a fresh start
function reset() {
	currentNumber.innerHTML = 0;
	result.innerHTML = "";
	operatorArr = [];
	numbersArr = [];
}

//Subtracts the current number by 1 (e.g. backspace button)
function deleteScreen() {
	currentNumber.innerHTML = currentNumber.innerHTML.slice(0, -1);
}

function mathfunctions() {
	if (result.innerHTML.slice(-1) == "+") {
		result.innerHTML = myFunctions[0](a, b);
		a = parseFloat(result.innerHTML);
	} else if (result.innerHTML.slice(-1) == "-") {
		result.innerHTML = myFunctions[1](a, b);
		a = parseFloat(result.innerHTML);
	} else if (result.innerHTML.slice(-1) == "÷") {
		result.innerHTML = myFunctions[2](a, b);
		a = parseFloat(result.innerHTML);
	} else if (result.innerHTML.slice(-1) == "x") {
		result.innerHTML = myFunctions[3](a, b);
		a = parseFloat(result.innerHTML);
	}
}

function mathOperation() {
	if (!b) {
		b = parseFloat(currentNumber.innerHTML);
	}
	if (!a & !b) {
		return;
	} else if (a && b) {
		mathfunctions();
		currentNumber.innerHTML = "";
	}
} 


