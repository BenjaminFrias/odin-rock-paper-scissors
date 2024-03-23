const options = ["rock", "paper", "scissors"];
let pcWins = 0;
let playerWins = 0;

// Get pc selection
function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}

// Play round
function playRound(playerSelection, computerSelection) {
  // Check user input
  playerSelection = playerSelection.toLowerCase().trim();

  // Ask again if selection is invalid
  while (!options.includes(playerSelection)) {
    playerSelection = prompt("Please enter a valid input.").toLowerCase().trim();
  }

  if (playerSelection === "rock" && computerSelection === "paper") {
    pcWins++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerWins++;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerWins++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    pcWins++;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    pcWins++;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerWins++;
    return "You Win! Scissors beats Paper";
  } else {
    return "TIE!";
  }
}

// Get input of user and pc selection and play round
function playGame() {
  const playerSelection = prompt("Rock, paper, scissors?").toLowerCase().trim();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
}

// Call the playGame function 5 times
for (let i = 0; i < 5; i++) {
  playGame();
}

// Display winner of the game
if (playerWins > pcWins) {
    console.log(`You win the game! Your wins: ${playerWins}, Pc wins: ${pcWins}`)
}
else if (playerWins < pcWins) {
    console.log(`You Lose the game! Your wins: ${playerWins}, Pc wins: ${pcWins}`)
}
else {
    console.log(`There was a Tie! Your wins: ${playerWins}, Pc wins: ${pcWins}`)
}