let playerScore = 0
let computerScore = 0

function computerPlay () {
    let move = Math.floor(Math.random() * 3);
    
    if (move === 0) {
        return 'rock'
    } else if (move === 1) {
        return 'paper'
    } else {
        return 'scissors'
    };
}


function playRound (playerSelection, computerSelection) {
    let playerMove = playerSelection.toLowerCase();
    
    if (playerMove === computerSelection) {
        return 'Tie!'
    } else if (playerMove === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        return 'You lose! Paper beats Rock'
    } else if (playerMove === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        return 'You win! Rock beats Scissors'
    } else if (playerMove === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        return 'You win! Paper beats Rock'
    } else if (playerMove === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        return 'You lose! Scissors beats Paper'
    } else if (playerMove === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        return 'You lose! Rock beats Scissors'
    } else if (playerMove === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        return 'You win! Scissors beats Paper'
    };


}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt();
        const computerSelection = computerPlay();
        console.log(playRound (playerSelection, computerSelection));

      }

    if (playerScore > computerScore) {
        console.log('Player wins with a score of ' + playerScore + ' to ' + computerScore + '!')
    } else if (computerScore > playerScore) {
        console.log('Computer wins with a score of ' + computerScore + ' to ' + playerScore+ '!')
    } else {
        console.log("It's a tie!")
    }


    }
