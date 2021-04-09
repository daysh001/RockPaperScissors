// //globals
let playerScore = 0;
let computerScore = 0;

//the computers choice
function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);

  switch (
    computerChoice //changes the computers icon to its choice
  ) {
    case 1:
      document.getElementById("computerChoiceImg").src = "images/Rock.png";
      return 1;
      break;

    case 2:
      document.getElementById("computerChoiceImg").src = "images/Paper.png";
      return 2;
      break;

    case 3:
      document.getElementById("computerChoiceImg").src = "images/Scissors.png";
      return 3;
      break;

    default:
      alert.log("Something has gone wrong.");
  }
}

computerPlay();

//the players choice
//the player icon changes to its choice depending which button has been clicked
function playerPlay() {
  btnRock = document.querySelector("#playerRock");
  btnRock.addEventListener("click", () => {
    document.getElementById("playerChoiceImg").src = "images/Rock.png";
    return 1;
  });

  btnPaper = document.querySelector("#playerPaper");
  btnPaper.addEventListener("click", () => {
    document.getElementById("playerChoiceImg").src = "images/Paper.png";
    return 2;
  });

  btnScissors = document.querySelector("#playerScissors");
  btnScissors.addEventListener("click", () => {
    document.getElementById("playerChoiceImg").src = "images/Scissors.png";
    return 3;
  });
}

playerPlay();

//determines who wins and loses
function playRound(playerSelection, computerSelection) {
  if (
    ((playerSelection == 2 || 3) && playerSelection > computerSelection) ||
    (playerSelection === 1 && computerSelection === 3)
  ) {
    playerScore++;
    console.log(
      `The player has won! The score is P:${playerScore} and C:${computerScore}`
    );
  } else if (playerSelection === computerSelection) {
    console.log(
      `It's a draw! The score is P:${playerScore} and C:${computerScore}`
    );
  } else {
    computerScore++;
    console.log(
      `The computer has won! The score is P:${playerScore} and C:${computerScore}`
    );
  }
}

//runs the game and displays final score
function game() {
  //round 1

  playRound(playerPlay(), computerPlay());

  //round 2
  console.log("Round 2");
  playRound(playerPlay(), computerPlay());

  //round 3
  console.log("Round 3");
  playRound(playerPlay(), computerPlay());

  //round 4
  console.log("Round 4");
  playRound(playerPlay(), computerPlay());

  //round 5
  console.log("Round 5");
  playRound(playerPlay(), computerPlay());

  //displays overall score and winner
  if (playerScore > computerScore) {
    console.log(
      `The game is over, the player has won!. The final score is p:${playerScore} and C:${computerScore}.`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `The game is over, the computer has won! The final score is p:${playerScore} and C:${computerScore}.`
    );
  } else {
    console.log(
      `The game is over, it's a draw! The final score is p:${playerScore} and C:${computerScore}.`
    );
  }
}

// game();
