const cells = document.querySelectorAll(".cell");
const cellsArray = Array.from(cells);
const state = document.getElementById("state");
const playAgainButton = document.getElementById("play-again-button");

// 0 for user and 1 for computer
let currentPlayer = 0;

let gameOver = false;

//every winning combination (rows, columns and diagnosal)
const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let cell of cells) {
  cell.addEventListener("click", function () {
    if (cell.innerHTML === "") {
      cell.innerHTML = "X";

      checkWins("X");

      if (!gameOver) {
        currentPlayer = 1;
        state.innerHTML = "Current player: Computer";
        setTimeout(() => {
          computersTurn();
        }, 800);
      }
    }
  });
}

function computersTurn() {
  //check if computer has a chance of winning
  if (currentPlayer) {
    for (let combo of wins) {
      checkTrio(combo, "O");
    }
  }

  //check if user has a chance of winning
  if (currentPlayer) {
    for (let combo of wins) {
      checkTrio(combo, "X");
    }
  }

  //choose an empty cell
  if (currentPlayer) {
    let i = 0;
    while (currentPlayer && i < 9) {
      if (cellsArray[i].innerHTML == "") {
        cellsArray[i].innerHTML = "O";
        currentPlayer = 0;
      }
      i++;
    }
  }

  checkWins("O");

  state.innerHTML = "Current player: User";

  //computer has no option
  if (currentPlayer) {
    setTimeout(() => {
      gameOver = true;
      endGame();
    }, 800);
  }
}

//check if the given array (in terms of cellsArray) has 2 char and 1 empty cell
function checkTrio(array, char) {
  let charCount = 0;
  let emptyCount = 0;
  let emptyIndex;

  for (let i in array) {
    if (cellsArray[array[i]].innerHTML === char) {
      charCount++;
    }
    if (cellsArray[array[i]].innerHTML === "") {
      emptyCount++;
      emptyIndex = array[i];
    }
  }

  if (charCount === 2 && emptyCount === 1 && currentPlayer) {
    cellsArray[emptyIndex].innerHTML = "O";
    currentPlayer = 0;
  }
}

function checkWins(char) {
  for (let combo of wins) {
    console.log(
      combo[0],
      combo[1],
      combo[2],
      cellsArray[combo[0]],
      cellsArray[combo[1]],
      cellsArray[combo[2]]
    );
    if (
      cellsArray[combo[0]].innerHTML === char &&
      cellsArray[combo[1]].innerHTML === char &&
      cellsArray[combo[2]].innerHTML === char
    ) {
      setTimeout(() => {
        endGame(char);
        gameOver = true;
      }, 800);
      break;
    }
  }
}

function endGame(char) {
  if (char === "X") {
    alert("User won!");
  } else if (char === "O") {
    alert("Computer won!");
  } else {
    alert("It's a tie!");
  }

  playAgainButton.style.visibility = "visible";
}

playAgainButton.addEventListener("click", function () {
  setTimeout(() => {
    playAgainButton.style.visibility = "hidden";
  }, 800);

  cellsArray.forEach((cell) => {
    cell.innerHTML = "";
  });

  currentPlayer = 0;
  gameOver = false;
  state.innerHTML = "Current player: User";
});
