// create user function to choose r, p, or s
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    //validate users choice
    if(userInput === "rock" || userInput === "r"){
        return userInput;
    }
    else if(userInput === "scissors" || userInput === "s"){
        return userInput;
    }
    else if(userInput === "paper" || userInput === "p"){
        return userInput;
    }
    else{
        console.log("Not an option. Choose again");
    }
}

const getComputerChoice = () => {
    // get random number between 0 and 2. Apply number to rock, paper, or scissors
    let randNumb = Math.floor(Math.random() * 3);
    if (randNumb === 0){
        return "rock";
    }
    else if(randNumb === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

// compare user with comp to get winner
const determineWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice){
        return "By golly it's a tie!";
    }
    if (userChoice === "rock" || userChoice === "r"){
        if (compChoice === "paper"){
            return "Paper beats rock. Comp wins!";
        }
        else{
            return "User won!";
        }
    }
    if (userChoice === "paper" || userChoice === "p"){
        if (compChoice === "scissors"){
            return "Scissors beats paper. Comp wins!";
        }
        else {
            return "User wins!";
        }
    }
    if (userChoice === "scissors" || userChoice === "s"){
        if (compChoice === "rock"){
            return "Rock beats scissors. Comp wins!";
        }
        else {
            return "User wins!";
        }
    }
}

// create the function to play the game
const playGame = () => {
    const userChoice = getUserChoice("paper");
    const compChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + compChoice);

    console.log(determineWinner(userChoice, compChoice));
}

// call game function to play
playGame();