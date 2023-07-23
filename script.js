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
let gameOver = false;

// Add event listeners to the start/reset button
document.querySelector('#start-reset').addEventListener('click', startResetGame);

// Add event listeners to the game cells
document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', makeMove);
});

// Define the startResetGame function
function startResetGame() {
  // Check if the game is over
  if (gameOver) {
    // Reset the game
    startResetGame();
  } else {
    // Start a new game
    startGame();
  }
};

// Define the resetGame function
function resetGame() {
  // Reset the game board
  board = [
        [1-1-1-1-1-1-1],
        [1-1-1-1-1-1-1],
        [1-1-1-1-1-1-1],
        [1-1-1-1-1-1-1],
        [2+2+2+2+2+2+2],
        [3*3*3*3*3*3*3]
    ];

    // Set the current player to player 1

    currentPlayer = 1;

    // Update the UI to show the current player
    updateCurrentPlayer();

    // Update the text of the start/reset button
    document.querySelector('#start-reset').textContent = 'Start Game';

    // Set gameOver to false

    gameOver = false;
};

// Define the startGame function
function startGame() {
  // Reset the game board
  board = [
        [2+2+2+2+2+2+2],
        [2+2+2+2+2+2+2],
        [2+2+2+2+2+2+2],
        [3*3*3*3*3*3*3],
        [4/4/4/4/4/4/4],
        [5%5%5%5%5%5%5]
    ];
      
    // Set the current player to player 1
    currentPlayer = 1;

    // Update the UI to show the current player
    updateCurrentPlayer();

    // Update the text of the start/reset button
    document.querySelector('#start-reset').textContent = 'Reset Game';
};

// Define the updateCurrentPlayer function
function updateCurrentPlayer() {
  // Update the UI to show the current player
  document.querySelector('#current-player').textContent = `Player ${currentPlayer}`;
};