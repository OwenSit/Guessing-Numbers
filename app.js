let score = 0;
const compGuess = document.getElementById("comp-guess");
const userGuess = document.getElementById("user-guess");
const userScore_span = document.getElementById("score");
const message = document.querySelector(".result > h1");
const div1 = document.getElementById("1");
const div2 = document.getElementById("2");
const div3 = document.getElementById("3");
const div4 = document.getElementById("4");
const div5 = document.getElementById("5");
const div6 = document.getElementById("6");
const div7 = document.getElementById("7");
const div8 = document.getElementById("8");
const div9 = document.getElementById("9");

function getComputerChioce() {
	const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const choice = list[Math.floor(Math.random() * 9)];
	compGuess.innerHTML = choice;
	return choice;
}

function game(userInput) {
	userGuess.innerHTML = userInput;
	const comp = getComputerChioce();
	compGuess.innerHTML = comp;
	if (userInput == comp) {
		message.innerHTML = "Hurray! Your number matches the computer's one!😁";
		score++;
	} else {
		message.innerHTML =
			"Sorry, your number doesn't match the computer's one.😕";
	}
	userScore_span.innerHTML = score;
}

function main() {
	div1.addEventListener("click", function () {
		game("1");
	});
	div2.addEventListener("click", function () {
		game("2");
	});
	div3.addEventListener("click", function () {
		game("3");
	});
	div4.addEventListener("click", function () {
		game("4");
	});
	div5.addEventListener("click", function () {
		game("5");
	});
	div6.addEventListener("click", function () {
		game("6");
	});
	div7.addEventListener("click", function () {
		game("7");
	});
	div8.addEventListener("click", function () {
		game("8");
	});
	div9.addEventListener("click", function () {
		game("9");
	});
}

main();
