const computerPlay = () => {
  const play = Math.floor(Math.random() * 3);

  return play;
};

const playerPlay = () => {
  const play = prompt("Please pick rock, paper or scissors!")
    .toLowerCase()
    .trim();

  if (play === "rock") {
    return 0;
  } else if (play === "paper") {
    return 1;
  } else if (play === "scissors") {
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
      return [0, "You lose! Rock beats scissors"];
    }
  } else if (computerSelection === 1) {
    if (playerSelection === 0) {
      return [0, "You lose! Paper beats rock!"];
    } else if (playerSelection === 2) {
      return [1, "You win! Scissors beats paper!"];
    }
  } else if (computerSelection === 2) {
    if (playerSelection === 0) {
      return [1, "You win! Rock beats scissors"];
    } else if (playerSelection === 1) {
      return [0, "You lose! Scissors beats paper!"];
    }
  }
};

const game = () => {
  let computerScore = 0;
  let playerScore = 0;
  while ((computerScore && playerScore) < 5) {
    const round = playRound(computerPlay(), playerPlay());
    console.log(round[1]);
    if (round[0] === 0) {
      computerScore++;
    } else if (round[0] === 1) {
      playerScore++;
    }
    console.log(computerScore, playerScore);
  }
  console.log("Final score:");
  console.log(`Computer Score: ${computerScore}`);
  console.log(`Player Score: ${playerScore}`);

  if (computerScore > playerScore) {
    console.log("You lose! The computer wins");
  } else if (playerScore > computerScore) {
    console.log("You win! The computer loses");
  }
};

game();
