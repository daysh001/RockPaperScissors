// //globals
let playerScore = 0;
let computerScore = 0;
let toggleCompTurn = false;

function start() {
  toggleCompTurn = false;
  let winner = document.getElementById("whoWon");
  winner.style.display = "none";
}

//the players choice
//the player icon changes to its choice depending which button has been clicked
function playerPlay() {
  let btnRock = document.querySelector("#playerRock");
  btnRock.addEventListener("click", () => {
    document.getElementById("playerChoiceImg").src = "images/Rock.png";
    return 1;
  });

  let btnPaper = document.querySelector("#playerPaper");
  btnPaper.addEventListener("click", () => {
    document.getElementById("playerChoiceImg").src = "images/Paper.png";
    return 2;
  });

  let btnScissors = document.querySelector("#playerScissors");
  btnScissors.addEventListener("click", () => {
    document.getElementById("playerChoiceImg").src = "images/Scissors.png";
    return 3;
  });

  toggleCompTurn = true;
}

//the computers choice
function computerPlay() {
  if (toggleCompTurn === true) {
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
    toggleCompTurn = false;
  }

  

}

//win and lose logic per round
function playRound(playerSelection, computerSelection) {
  if (
    ((playerSelection == 2 || 3) && playerSelection > computerSelection) ||
    (playerSelection === 1 && computerSelection === 3)
  ) {
    playerScore++; 

    let playerWins = document.querySelector("#playerWins");
    playerWins.textContent = playerScore;
  } else if (playerSelection === computerSelection) {

    
  } else {
    computerScore++;  // append computerScore to computerWins ID

    let computerWins = document.querySelector("#computerWins");
    computerWins.textContent = computerScore;
  }
}

// Winner and loser logic overall (game over)
function gameOver() {
  //displays overall score and winner
  if (playerScore > computerScore) {  // whoWon == "Player Won"  
    console.log(
      `The game is over, the player has won!. The final score is p:${playerScore} and C:${computerScore}.`
    );
  } else if (computerScore > playerScore) {
    console.log(  // whoWon == "Computer Won"
      `The game is over, the computer has won! The final score is p:${playerScore} and C:${computerScore}.`
    );
  } else {
    console.log(
      `The game is over, it's a draw! The final score is p:${playerScore} and C:${computerScore}.`
    );
  }
}

//runs the game
function game() {

 // let playerChoices = document.getElementById("playerChoices");
  playRound(playerPlay(), computerPlay());
  gameOver();
}

// **** GAME ****
start();

let playButton = document.getElementById("playBtn");
playButton.addEventListener('click', game); //starts the game 
