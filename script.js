const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput == 'rock' ||
        userInput == 'paper' ||
        userInput == 'scissors' ||
        userInput == 'bomb') {
        return userInput;
    } else {
        console.log("Please select rock, paper, or scissors");
    }
}

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice == computerChoice) {
        return "It's a tie!";
    }

    if (userChoice == 'bomb') {
        return 'KA-BOOM!! You win!'
    }

    if (userChoice == 'rock') {
        if (computerChoice == 'paper') {
            return "The computer won";
        } else {
            return "You won!";
        }
    } else if (userChoice == 'paper') {
        if (computerChoice == 'scissors'){
            return "The computer won";
        } else {
            return "You won!";
        }
    } else if (userChoice == 'scissors') {
        if (computerChoice == 'rock') {
            return "The computer won";
        } else {
            return "You won!";
        }
    }
}


const playGame = () => {
    const userChoice = getUserChoice(window.prompt('Enter rock, paper, or scissors'));
    const computerChoice = getComputerChoice();
    console.log(`You selected: ${userChoice} | The computer selected: ${computerChoice}`);
    console.log(`Result: ${determineWinner(userChoice, computerChoice)}`);
}

playGame();
