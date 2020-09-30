var computerScore = 0;
var playerScore = 0;
var draws = 0;

function computerPlay () {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*3)]
}

function playRound (playerSelection, computerSelection) {

    if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') ||(playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') || (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock')) {
        computerScore ++;
        return `You LOSE this round! ${playerSelection.toUpperCase()} is beaten by ${computerSelection.toUpperCase()}.`

    } else if ((playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') ||(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') || (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors')) {
        playerScore++;
        return `You WIN this round! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`

    } else if(playerSelection.toLowerCase() === computerSelection) {
        draws++;
        return `It's a DRAW! ${computerSelection.toUpperCase()} versus ${playerSelection.toUpperCase()}.`

    } else {
        return `Wrong Input!`
    }
}

function game() {
    for (i=1; i<=5; i++) {
        alert(`Rock-Paper-Scissors \nRound ${i} of 5:`)
        let playerSelection = prompt("rock, paper or scissors ?");
        const computerSelection = computerPlay();
        alert(playRound(playerSelection, computerSelection));
    }
    alert(`Wins: ${playerScore}  Losses: ${computerScore}  Draws: ${draws}`)
    if (playerScore > computerScore) {
        alert(`Yay! You won this game.`)
    } else if(playerScore < computerScore) {
        alert(`Oops! You lost this one.`)
    }else {
        alert(`Let's call it a draw.`)
    }
    alert(`Thanks for playing this game.\n\nRefresh this page to play again.`)
}

game();