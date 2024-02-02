const prompt = require('prompt-sync')({sigint: true});


var computerScore=0;
var playerScore=0;

function getComputerChoice() {
  var result = Math.floor(Math.random() * 3 + 1);
  // console.log(result);

  switch (result) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";

    case 3:
      return "scissors";
    default:
      break;
  }
}


function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  //Player chooses ROCK
  if (playerSelection == "rock") {
    if (computerSelection == "paper") {
        computerScore++;
        return "Computer wins : Paper beats Rock"
    }
    if (computerSelection == "scissors") {  
        playerScore++;
        return "Player wins : Rock beats Scissors";
    }

    if (computerSelection=="rock") {
        return "Tie";
    }
  }

//Player chooses Paper
  if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
        computerScore++;
        return "Computer wins : Scissors beats Paper"
    }
    if (computerSelection == "rock") {  
        playerScore++;
        return "Player wins : Paper beats Rock";
    }

    if (computerSelection=="paper") {
        return "Tie";
    }
  }

  //Player chooses Scissors
  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
        computerScore++;
        return "Computer wins :Rock beats Scissors"
    }
    if (computerSelection == "paper") {  
        playerScore++;
        return "Player wins : Scissors beats Paper";
    }

    if (computerSelection=="scissors") {
        return "Tie";
    }
  }

  
}

function playGame() {
  

  while (playerScore+computerScore!=5) {
    var playerChoice = prompt("Rock, Paper or Scissors?");
    var computerChoice = getComputerChoice();
    console.log (playRound(playerChoice, computerChoice));
    console.log("\n\n");
  }
    if(playerScore>computerScore){
        console.log(`\n\nYou win \n ScoreCard : ${playerScore}:${computerScore}`);
     }
     else{
        console.log(`\n\nComputer wins  \n ScoreCard : ${playerScore}:${computerScore}`);
     }
}

playGame();