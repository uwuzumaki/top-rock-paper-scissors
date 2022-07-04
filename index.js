let computerScore = 0;
let playerScore = 0;

const playerScoreWrapper = document.querySelector(".player-score-wrapper");
const computerScoreWrapper = document.querySelector(".computer-score-wrapper");
playerScoreWrapper.innerHTML = `Player: ${playerScore}`;
computerScoreWrapper.innerHTML = `Computer: ${computerScore}`;
const displayUpper = document.querySelector(".data-display-upper");
const displayLower = document.querySelector(".data-display-lower");

const choiceListener = (e) => {
  const result = playRound(computerPlay(), playerPlay(e.target.id));
  displayUpper.innerHTML = `${result[1]}`;

  if (result[0] === 0) {
    computerScore++;
    computerScoreWrapper.innerHTML = `Computer: ${computerScore}`;
  } else if (result[0] === 1) {
    playerScore++;
    playerScoreWrapper.innerHTML = `Player: ${playerScore}`;
  }

  console.log(computerScore, playerScore);

  if (computerScore === 5 || playerScore === 5) {
    buttons.forEach((button) => {
      button.removeEventListener("click", choiceListener);
    });
    if (computerScore > playerScore) {
      displayLower.innerHTML = `The computer wins!`;
    } else if (playerScore > computerScore) {
      displayLower.innerHTML += `The computer loses!`;
    }
  }
};

const buttons = document.querySelectorAll(".choice-button");
buttons.forEach((button) => {
  button.addEventListener("click", choiceListener);
});

const newGameButton = document.querySelector(".new-game-button");
newGameButton.addEventListener("click", () => {
  computerScore = 0;
  playerScore = 0;
  playerScoreWrapper.innerHTML = `Player: ${playerScore}`;
  computerScoreWrapper.innerHTML = `Computer: ${computerScore}`;
  displayUpper.innerHTML = "New game!";
  displayLower.innerHTML = "";
  buttons.forEach((button) => {
    button.addEventListener("click", choiceListener);
  });
});

const computerPlay = () => {
  const play = Math.floor(Math.random() * 3);

  return play;
};

const playerPlay = (id) => {
  let play = id;

  if (play === "rock") {
    console.log(play);
    return 0;
  } else if (play === "paper") {
    console.log(play);
    return 1;
  } else if (play === "scissors") {
    console.log(play);
    return 2;
  }
};

const playRound = (computerSelection, playerSelection) => {
  if (computerSelection === playerSelection) {
    return [2, "It's a tie!"];
  } else if (computerSelection === 0) {
    if (playerSelection === 1) {
      return [1, "You win! Paper beats rock!"];
    } else if (playerSelection === 2) {
      return [0, "You lose! Rock beats scissors!"];
    }
  } else if (computerSelection === 1) {
    if (playerSelection === 0) {
      return [0, "You lose! Paper beats rock!"];
    } else if (playerSelection === 2) {
      return [1, "You win! Scissors beats paper!"];
    }
  } else if (computerSelection === 2) {
    if (playerSelection === 0) {
      return [1, "You win! Rock beats scissors!"];
    } else if (playerSelection === 1) {
      return [0, "You lose! Scissors beats paper!"];
    }
  }
};
