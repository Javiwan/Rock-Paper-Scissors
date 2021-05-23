let playerSelection;
let computerSelection;
const rounds = 5;
let actualRound = 1;
let computerPoints = 0;
let playerPoints = 0;

startGame();



function startGame() {

    if (actualRound < rounds + 1) {

        console.log(`Round ${actualRound} of ${rounds}`)
        console.log(`Player: ${playerPoints} Computer: ${computerPoints}`);
        playerSelection = prompt('Paper, Rock or Scissors? ')
        if (playerSelection !== "") {
            if (playerSelectionCheck(playerSelection)) {
                actualRound++;
                computerSelection = computerPlay();
                console.log(`Player choose ${playerSelection}`);
                console.log(`Computer choose ${computerSelection}`);
                chooseWinner(playerSelection, computerSelection);
            }
            else {
                confirm('Please, introduce paper, rock or scissors')
                startGame();
            }
        } else {
            confirm('Please, introduce paper, rock or scissors')
            startGame();
        }


    } else {
        gameWinner();
    }


}


function playerSelectionCheck(selection) {

    selection = selection.toLowerCase();

    if (selection === 'paper' || selection === 'rock' || selection === 'scissors') {
        return true;
    } else {
        return false;
    }
}


function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    return computerElection(randomNumber);
}

function computerElection(num) {
    switch (num) {
        case 1:
            return 'paper';

        case 2:
            return 'rock';

        case 3:
            return 'scissors';
    }
}

function chooseWinner(player, computer) {
    switch (player) {
        case 'paper':
            if (computer === 'paper') {
                console.log('tie');
            } else if (computer === 'rock') {
                console.log('player wins');
                playerPoints++;
            } else {
                console.log('computer wins');
                computerPoints++;
            }
            startGame();
            break;

        case 'rock':
            if (computer === 'paper') {
                console.log('computer wins');
                computerPoints++;
            } else if (computer === 'rock') {
                console.log('tie');
            } else {
                console.log('player wins');
                playerPoints++;
            }
            startGame();
            break;

        case 'scissors':
            if (computer === 'paper') {
                console.log('player wins');
                playerPoints++;
            } else if (computer === 'rock') {
                console.log('computer wins');
                computerPoints++;
            } else {
                console.log('tie');
            }
            startGame();
            break;
    }
}

function gameWinner() {
    if (playerPoints === computerPoints) {
        console.log('ITS A TIE!!!');
        console.log(`Player: ${playerPoints} Computer: ${computerPoints}`);
    } else if (playerPoints > computerPoints) {
        console.log('THE PLAYER WINS THE GAME!!!');
        console.log(`Player: ${playerPoints} Computer: ${computerPoints}`);
    } else {
        console.log('SORRY, THE COMPUTER WINS THE GAME!!!');
        console.log(`Player: ${playerPoints} Computer: ${computerPoints}`);
    }
}

