let playerScore = 0
let computerScore = 0
const body = document.querySelector('body');
let gameResultsDiv = document.createElement('div');
let runningScoreDiv = document.createElement('div');
let finalScoreDiv = document.createElement('div');
body.appendChild(gameResultsDiv);
body.appendChild(runningScoreDiv);
body.appendChild(finalScoreDiv);


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





const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    const playerSelection = button.id
    const computerSelection = computerPlay();
    
    
    let gameResults = playRound (playerSelection, computerSelection);
    let runningScore = 'Current score is: Player ' + playerScore + ' - Computer ' + computerScore;
    
    body.removeChild(gameResultsDiv);
    body.removeChild(runningScoreDiv);

    gameResultsDiv.textContent = 'Current result: ' + gameResults;  
    body.appendChild(gameResultsDiv);
    
    runningScoreDiv.textContent = runningScore;  
    body.appendChild(runningScoreDiv);

    if (computerScore === 5) {
        finalScoreDiv.textContent = 'Computer wins!';  
        body.appendChild(finalScoreDiv);
    } else if (playerScore === 5) {
        finalScoreDiv.textContent = 'Player wins!';  
        body.appendChild(finalScoreDiv);
    }




    });
});





/*

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

*/