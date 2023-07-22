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


// Add event listeners to the game cells
document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', makeMove);
});

// Define the startGame function
function startGame() {
  // Reset the game board
  board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];

  // Set the current player to player 1
  currentPlayer = 1;

  // Update the UI to show the current player
  updateCurrentPlayer();
};

// Define the updateCurrentPlayer function
function updateCurrentPlayer() {
  // Update the UI to show the current player
  document.querySelector('#current-player').textContent = `Player ${currentPlayer}`;
};