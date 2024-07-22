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

  function determineResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  const winningConditions = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"],
  };

  return winningConditions[playerChoice].includes(computerChoice)
    ? "You win!"
    : "You lose!";
}

function determineResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    }
  
    const winningConditions = {
      rock: ["scissors", "lizard"],
      paper: ["rock", "spock"],
      scissors: ["paper", "lizard"],
      lizard: ["paper", "spock"],
      spock: ["rock", "scissors"],
    };
  
    return winningConditions[playerChoice].includes(computerChoice)
      ? "You win!"
      : "You lose!";
  }

  function updateScores(result) {
    if (result === "You win!") {
      playerWins++;
      totalPlayerResult.textContent = `Player Total: ${playerWins}`;
    } else if (result === "You lose!") {
      computerWins++;
      totalComputerResult.textContent = `Computer Total: ${computerWins}`;
    }
  }

  function updateDisplays(playerChoice, computerChoice, result) {
    playerDisplay.textContent = `Player: ${capitalizeFirstLetter(playerChoice)}`;
    computerDisplay.textContent = `Computer: ${capitalizeFirstLetter(computerChoice)}`;
    resultDisplay.textContent = `Result: ${result}`;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function checkForGameOver() {
    if (playerWins === 3 || computerWins === 3) {
      lockButtons();
      displayEndMessage(playerWins === 3 ? "🎉 VICTORY, you're cool! 🎉" : "💀 Try again! 🤝");
    }
  }