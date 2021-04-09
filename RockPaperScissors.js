// //globals
// let playerScore = 0;
// let computerScore = 0;

// //the computers choice
// function computerPlay(){
//     let computerChoice = Math.floor((Math.random() * 3) + 1);

//     switch(computerChoice){
//         case 1:
//         console.log("Computer: Rock");
//         return 1;
//         break;

//         case 2:
//         console.log("Computer: Paper");
//         return 2;
//         break;

//         case 3:
//         console.log("Computer: Scissors");
//         return 3;
//         break;

//         default:
//         console.log("Something has gone wrong.");
//     }
// }

// //the players choice
// function playerPlay() {
//     let playerChoice = prompt("1: Rock, 2: Paper, 3: Scissors.");

//     switch(playerChoice){
//         case "1":
//         console.log("Player: Rock");
//         return 1;
//         break;

//         case "2":
//         console.log("Player: Paper");
//         return 2;
//         break;

//         case "3":
//         console.log("Player: Scissors");
//         return 3;
//         break;

//         default:
//         console.log("Please enter a valid choice.")
//     }
// }

// //determines who wins and loses
// function playRound(playerSelection, computerSelection){
//     if (((playerSelection == 2 || 3) && (playerSelection > computerSelection)) || ((playerSelection === 1) && computerSelection === 3))
//     {
//         playerScore++;
//         console.log(`The player has won! The score is P:${playerScore} and C:${computerScore}`);
//     } else if(playerSelection === computerSelection) {
//         console.log(`It's a draw! The score is P:${playerScore} and C:${computerScore}`);
//     } else {
//         computerScore++;
//         console.log(`The computer has won! The score is P:${playerScore} and C:${computerScore}`);
//     }
// }

// //runs the game and displays final score
// function game(){
//     //round 1
//     console.log("Round 1");
//     playRound(playerPlay(), computerPlay());

//     //round 2
//     console.log("Round 2");
//     playRound(playerPlay(), computerPlay());

//     //round 3
//     console.log("Round 3");
//     playRound(playerPlay(), computerPlay());

//     //round 4
//     console.log("Round 4");
//     playRound(playerPlay(), computerPlay());

//     //round 5
//     console.log("Round 5");
//     playRound(playerPlay(), computerPlay());

//     //displays overall score and winner
//     if(playerScore > computerScore) {
//         console.log(`The game is over, the player has won!. The final score is p:${playerScore} and C:${computerScore}.`)
//     } else if (computerScore > playerScore) {
//         console.log(`The game is over, the computer has won! The final score is p:${playerScore} and C:${computerScore}.`)
//     } else {
//         console.log(`The game is over, it's a draw! The final score is p:${playerScore} and C:${computerScore}.`)
//     }

// }

// game();
