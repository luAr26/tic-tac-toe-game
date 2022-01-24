const resetGameStatus = () => {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  gameOverEl.firstElementChild.innerHTML = `You won, <span id="winner-name">Player Name</span>!`;
  gameOverEl.style.display = "none";
  document.querySelector("#active-game").children[1].style.display = "block";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItemEl = gameBoardEl.children[gameBoardIndex];
      gameBoardItemEl.innerText = "";
      gameBoardItemEl.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
};

const setActivePlayerName = () => {
  activePlayerNameEl.innerText = players[activePlayer].name;
};

const startNewGame = () => {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player names for both players!");
    return;
  }
  resetGameStatus();
  setActivePlayerName();
  gameAreaEl.style.display = "block";
};

const switchPlayer = () => {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  setActivePlayerName();
};

const selectGameField = (e) => {
  const selectedField = e.target;
  const selectedRow = +selectedField.dataset.row - 1;
  const selectedColumn = +selectedField.dataset.col - 1;

  if (selectedField.tagName !== "LI" || gameIsOver) {
    return;
  }

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please selected an empty field!");
    return;
  }

  selectedField.innerText = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  const winnerId = checkForGameOver();
  if (winnerId !== 0) {
    endGame(winnerId);
  }
  // console.log(gameData);
  // console.log(checkForGameOver());
  currentRound++;
  switchPlayer();
};

const checkForGameOver = () => {
  // Checking the rows for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  // Checking the columns for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  // Diagonal top left to bottom right

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  // Diagonal bottom left to top right

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
};

const endGame = (winnerId) => {
  gameIsOver = true;
  document.querySelector("#active-game").children[1].style.display = "none";
  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOverEl.firstElementChild.firstElementChild.innerText = winnerName;
  } else {
    gameOverEl.firstElementChild.innerText = `It's a draw!`;
  }
  gameOverEl.style.display = "block";
};
