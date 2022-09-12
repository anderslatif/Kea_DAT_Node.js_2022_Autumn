let score;

let playerOne;
let playerTwo;

function initializePlayers(playerOneInitialized, playerTwoInitialized) {
    playerOne = playerOneInitialized
    playerTwo = playerTwoInitialized;
}

function initializeScore(scoreInitialized = 301) {
    score = scoreInitialized;
}

function initializeGame() {
    console.log(playerOne, playerTwo);
    console.log("Game starts with score...", score);
}