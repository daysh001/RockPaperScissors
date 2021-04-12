//globals
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

//the computers choice 
function computerPlay() {
  let computerChoice = Math.floor((Math.random() * 3) + 1);

  switch (computerChoice) {
    case 1:
      console.log("Computer: Rock");
      document.getElementById("computerChoiceImg").src = "images/Rock.png";
      return 1;
      break;

    case 2:
      console.log("Computer: Paper");
      document.getElementById("computerChoiceImg").src = "images/Paper.png";

      return 2;
      break;

    case 3:
      console.log("Computer: Scissors");
      document.getElementById("computerChoiceImg").src = "images/Scissors.png";
      return 3;
      break;

    default:
      console.log("Something has gone wrong.");
  }
}

//the players choice based on which button is pressed
function playerPlay() {

  let playerRock = document.getElementById("playerRock");
  let playerPaper = document.getElementById("playerPaper");
  let playerScissors = document.getElementById("playerScissors");

  playerRock.addEventListener("click", () => {
    document.getElementById("playerChoiceImg").src = "images/Rock.png";
    playRound(1, computerPlay());
  })

  playerPaper.addEventListener("click", () => {
    document.getElementById("playerChoiceImg").src = "images/Paper.png";
    playRound(2, computerPlay());
  })

  playerScissors.addEventListener("click", () => {
    document.getElementById("playerChoiceImg").src = "images/Scissors.png";
    playRound(3, computerPlay());
  })

}

//logic to play a round and score
function playRound(playerSelection, computerSelection) {
  if (((playerSelection == 2 || 3) && (computerSelection == (playerSelection - 1))) || ((playerSelection === 1) && computerSelection === 3)) {
    playerScore++;
    let playerWins = document.querySelector("#playerWins");
    playerWins.textContent = playerScore;
  } else if (playerSelection === computerSelection) {
    tieScore++;
    let ties = document.querySelector("#ties");
    ties.textContent = tieScore;
  } else {
    computerScore++;
    let computerWins = document.querySelector("#computerWins");
    computerWins.textContent = computerScore;
  }

  gameOver();
}

//winner logic (overall gameover)
function gameOver() {
  let winner = document.querySelector("#winner");
  let buttons = document.querySelectorAll("button");

  if (playerScore === 5){
    winner.textContent = "Player has Won!";
    winner.style = "display: inline"
  } else if(computerScore === 5){
    winner.textContent = "Computer has won!";
    winner.style = "display: inline";
  }

  if (playerScore === 5 || computerScore === 5){
  buttons.forEach(button => {
    button.style = "display: None"
  });
}

}

playerPlay();
