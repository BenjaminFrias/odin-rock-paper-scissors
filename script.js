const options = ["rock", "paper", "scissors"];
const btns = document.querySelectorAll('button');
const results = document.querySelector('.results');

const score = document.querySelector('.running-score');
let playerScore = document.createElement('p');
let pcScore = document.createElement('p');
score.append(playerScore, pcScore)


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
  //const playerSelection = prompt("Rock, paper, scissors?").toLowerCase().trim();
  
  btns.forEach((selection) => {
    selection.addEventListener('click', () => {
      const computerSelection = getComputerChoice();

      // Create results
      let result = document.createElement('p');
      result.innerText = playRound(selection.textContent, computerSelection);
      results.appendChild(result);

      // Update the running score
      playerScore.innerText = `Player: ${playerWins}`;
      pcScore.innerText = `PC: ${pcWins}`;

      if (playerWins === 5 || pcWins === 5) {
        displayWinner();
      };
    });
  });

}

playGame();

function displayWinner() {
  // Hide buttons
  btns.forEach(item => {
    item.style.display = 'none';
  });

  let winner = document.createElement('h1');
  results.appendChild(winner);

  // Display winner of the game
  if (playerWins > pcWins) {
      winner.innerText = `You win the game! Your wins: ${playerWins}, Pc wins: ${pcWins}`;
  }
  else {
      winner.innerText = `You Lose the game! Your wins: ${playerWins}, Pc wins: ${pcWins}`;
  }
  
};