let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(max) {
    return Math.floor(Math.random() * max)
}

function compareGuesses(human, computer, target) {
    let humanGuess = Math.abs(target - human);
    let computerGuess = Math.abs(target - computer);
    console.log(`Current round number is ${currentRoundNumber}`);
    console.log(`Human difference is ${humanGuess}`);
    console.log(`Computer difference is ${computerGuess}`);
    if (humanGuess <= computerGuess) {
        return true
    } else {
        return false
    }
}

function updateScore(winner) {
    if (winner === true) {
        console.log('Human WINS!');
        return humanScore++;
    } else {
        console.log('Computer WINS!');
        return computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
    return currentRoundNumber
}

const target = generateTarget(10);
console.log(`The target is ${target}`);
const compare = compareGuesses(3, 5, target);
const update = updateScore(compare);
const updateRound = advanceRound();
console.log(`Computer score is ${computerScore}`);
console.log(`Human score is ${humanScore}`);
