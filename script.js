// Define some variable to keep track of the game state
let currentPlayer = 1;
let board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

let scores = [0, 0];

// Add event listeners to the buttons
document.querySelector('#start').addEventListener('click', startGame);
document.querySelector('#reset').addEventListener('click', resetGame);

// To start the game
const startButton = document.querySelector('#start');
startButton.addEventListener('click', startGame);

function startGame() {

}

// To reset the game if the game ends in a tie

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGame);

function resetGame() {
  
}