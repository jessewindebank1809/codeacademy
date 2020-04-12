let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(max) {
    return Math.floor(Math.random * max)
}

function compareGuesses(human, computer, target) {
    let humanGuess = target - human;
    console.log(`human difference is ${humanGuess}`);
    let computerGuess = target - computer;
    console.log(`computer difference is ${computerGuess}`);
    if (Math.abs(humanGuess <= computerGuess)) {
        return true
    } else {
        return false
    }
}

function updateScore(winner) {
    if (winner === true) {
        console.log('Human WINS!');
        return humanScore +=
    } else {
        console.log('Computer WINS!');
        return computerScore +=
    }
}

function advanceRound() {
    currentRoundNumber +=
    console.log(`Computer score is ${computerScore}`);
    console.log(`Human score is ${computerScore}`);
    console.log(`Current round number is ${currentRoundNumber}`);
}

const target = generateTarget(9);
console.log(`The target is ${target}`);
const compare = compareGuesses(3, 5, generateTarget);
const update = updateScore(compare);
const updateRound = advanceRound();