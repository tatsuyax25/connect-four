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
    resetGame();
  } else {
    // Start a new game
    startGame();
  }
};

// Define the resetGame function
function resetGame() {
  // Reset the game board
  board = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];

    // Clear the game board cells
    document.querySelectorAll('.cell').forEach(cell => {
      cell.innerHTML = '';
    });

    // Set the current player to player 1
    currentPlayer = 1;

    // Update the UI to show the current player
    updateCurrentPlayer();

    // Update the text of the start/reset button
    document.querySelector('#start-reset').textContent = 'Start Game';

    // Set gameOver to false
    gameOver = false;

    // Log that the game has been reset
    console.log('Game reset');
};

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
    // Make a move
    board[row][column] = currentPlayer;

    // Log the updated board
    console.log('Update board:', board);

    // Update the UI to show the move
    updateBoard();

    // Check if the game is over
    if (checkGameOver()) {
      // End the game
      endGame();
    } else {
      // Switch to the other player
      currentPlayer = currentPlayer === 1 ? 2 : 1;

      // Log the current player
      console.log('Current player:', currentPlayer);

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

  // Log the updated UI
  console.log('Updated UI');
};

// Define the checkGameOver function
function checkGameOver() {
  // Check for a win
  if (checkWin()) {
    // Reset the game
    // resetGame();
    return true;
  }

  // Check for a tie
  if (checkTie()) {
    // Reset the game
    // resetGame();
    return false;
  }

  // The game is not over
  return false;
};

// Define the checkWin function
function checkWin() {
  // Check rows
  for (let row = 0; row < 6; row++) {
    for (let column = 0; column < 4; column++) {
      if (board[row][column] === currentPlayer && board[row][column + 1] === currentPlayer && board[row][column + 2] === currentPlayer && board[row][column + 3] === currentPlayer) {
        return true;
      }
    }
  }

  // Check columns
  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 7; column++) {
      if (board[row][column] === currentPlayer && board[row+ 1][column] === currentPlayer && board[row + 2][column] === currentPlayer && board[row + 3][column] === currentPlayer) {
        return true;
      }
    }
  }
  
  // Check diagonals
  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 4; column++) {
      if (board[row][column] === currentPlayer && board[row + 1][column + 1] === currentPlayer && board[row + 2][column + 2] === currentPlayer && board[row + 3][column + 3] === currentPlayer) {
        return true;
      }
    }
  }

  for (let row = 3; row < 6; row++) {
    for (let column = 0; column < 4; column++) {
      if (board[row][column] === currentPlayer && board[row - 1][column + 1] === currentPlayer && board[row - 2][column + 2] === currentPlayer && board[row - 3][column + 3] === currentPlayer) {
        return true;
      }
    }
  }

  // No win found
  return false;
};

// Define the checkTie function
function checkTie() {
  // Check if all cells are filled
  for (let row = 0; row < 6; row++) {
    for (let column = 0; column < 7; column++) {
      if (board[row][column] === 0) {
        return false;
      }
    }
  }

  // The game is a tie
  return true;
};

// Define the endGame function
function endGame() {
  // Check if there is a winner
  if (checkWin()) {
    // Update the scores
    scores[currentPlayer - 1]++;

    // Update the UI to show the winner and the updated scores
    document.querySelector('#winner').textContent = `Player ${currentPlayer} wins!`;
    document.querySelector('#player1-score').textContent = scores[0];
    document.querySelector('#player2-score').textContent = scores[1];
  } else {
    // Update the UI to show that the game ended in a tie
    document.querySelector('#winner').textContent = `It's a tie!`;
  }

  // Set gameOver to true
  gameOver = true;
};