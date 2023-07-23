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

// Define the makeMove function
function makeMove(event) {
  // Get the ID of the clicked cell
  let cellId = event.target.id;

  // Parse the column and row from the cell ID
  let column = parseInt(cellId[1]);
  let row = parseInt(cellId[3]);

  // Check if the clicked cell is empty
  if (board[row][column] === 0) {
    board[row][column] = currentPlayer;

    // Update the UI to show the move
    updateBoard();

    // Check if the game is over
    if (checkGameOver()) {
      // End the game
      endGame();
    } else {
      // Switch to the other player
      currentPlayer = currentPlayer === 1 ? 2 : 1;

      // Update the UI to show the current player
      updateCurrentPlayer();
    }
  }
};

// Define the updateBoard function
function updateBoard() {
  // Loop through the game board and update the UI
  for (let row = 0; row < 6; row++) {
    for (let column = 0; column < 7; column++) {
      // Get the cell element
      let cell = document.querySelector(`#c${column}r${row}`);

      // Update the cell color based on its value
      if (board[row][column] === 1) {
        cell.style.backgroundColor = 'red';
      } else if (board[row][column] === 2) {
        cell.style.backgroundColor = 'yellow';
      } else {
        cell.style.backgroundColor = 'white';
      }
    }
  }
};

// Define the checkGameOver function
function checkGameOver() {
  // Check for a win
  if (checWin()) {
    return true;
  }

  // Check for a tie
  if (checkTie()) {
    return false;
  }

  // The game is not over
  return false;
};