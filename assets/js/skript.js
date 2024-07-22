document.addEventListener("DOMContentLoaded", function () {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    let playerWins = 0;
    let computerWins = 0;
  });

  const playerDisplay = document.getElementById("playerDisplay");
  const computerDisplay = document.getElementById("computerDisplay");
  const resultDisplay = document.getElementById("resultDisplay");
  const totalPlayerResult = document.getElementById("totalPlayerResult");
  const totalComputerResult = document.getElementById("totalComputerResult");
  const buttons = document.querySelectorAll("#gameButtonContainer button");
  const newGame = document.getElementById("newGame");

  function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }
