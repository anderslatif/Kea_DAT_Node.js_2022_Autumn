let score;

let playerOne;
let playerTwo;

export function initializePlayers(playerOneInitialized, playerTwoInitialized) {
    playerOne = playerOneInitialized
    playerTwo = playerTwoInitialized;
}

export function initializeScore(scoreInitialized = 301) {
    score = scoreInitialized;
}

export function initializeGame() {
    console.log(playerOne, playerTwo);
    console.log("Game starts with score...", score);
}
