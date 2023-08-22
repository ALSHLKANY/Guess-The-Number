'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener('click', function () {
  let n = Number(document.querySelector(".guess").value);

  if (!score) return;

  if (!n) {
    displayMessage("⛔️ No number!");
  }
  else if (n == secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.background = "#60b347";

    if (highScore < score)
      highScore = score;

    document.querySelector(".highscore").textContent = highScore;
  }
  else {
    score--;
    displayMessage(n > secretNumber ? "📈 Too high!" : "📉 Too low!");
  }

  document.querySelector(".score").textContent = score;

  if (!score) {
    document.querySelector("body").style.background = "#ff7676";
    displayMessage("💥 You lost the game!");
  }
});

document.querySelector(".again").addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  console.log(secretNumber);
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.background = "#222";
  document.querySelector(".number").textContent = "?";
});
