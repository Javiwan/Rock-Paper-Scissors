let playerSelection;

startGame();



function startGame() {
    playerSelection = prompt('Paper, Rock or Scissors? ')
    if (playerSelection !== "") {
        playerSelectionCheck(playerSelection);
    }
    else {
        confirm('Please, introduce paper, rock or scissors')
        startGame();
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



