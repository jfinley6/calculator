const numbers = document.querySelectorAll(".numberButton");
const currentNumber = document.getElementById("currentNumber");
const decimal = document.getElementById("decimal");
const decimalButton = document.querySelector(".decimalButton");
const resetButton = document.getElementById("resetButton");
const deleteButton = document.getElementById("deleteButton");

for (number of numbers) {
	number.addEventListener("click", function () {
		if (currentNumber.innerHTML === "0") {
			currentNumber.innerHTML = "";
		}
		currentNumber.innerHTML += this.innerHTML;
	});
}

decimalButton.addEventListener("click", decimalScreen);
resetButton.addEventListener("click", reset);
deleteButton.addEventListener("click", deleteScreen);

function decimalScreen() {
	if (currentNumber.innerHTML.includes(".")) {
		return;
	} else {
		currentNumber.innerHTML += decimal.innerHTML;
	}
}

function reset() {
	currentNumber.innerHTML = 0;
}

function deleteScreen() {
	currentNumber.innerHTML = currentNumber.innerHTML.slice(0, -1);
}
