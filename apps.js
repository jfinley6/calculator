const numbers = document.querySelectorAll(".numberButton");
const currentNumber = document.getElementById("currentNumber");
const decimal = document.getElementById("decimal");
const decimalButton = document.querySelector(".decimalButton");
const resetButton = document.getElementById("resetButton");
const deleteButton = document.getElementById("deleteButton");
const result = document.getElementById("operatorResult");
const operatorButtons = document.querySelectorAll(".operatorButton");
const equals = document.getElementById("equals");



//Math functions to return based on which operator the user has entered
myFunctions = [
	function (num1, num2) {
		return num1 + num2;
	},
	function (num1, num2) {
		return num1 - num2;
	},
	function (num1, num2) {
		return num1 / num2;
	},
	function (num1, num2) {
		return num1 * num2;
	},
];






