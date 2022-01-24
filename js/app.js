const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;
const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];
const playerConfigOverlayEl = document.querySelector("#config-overlay");
const backdropEl = document.querySelector("#backdrop");
const formEl = document.querySelector("form");
const errorsOutputElement = document.querySelector("#config-errors");
const gameAreaEl = document.querySelector("#active-game");
const activePlayerNameEl = document.querySelector("#active-player-name");
const gameOverEl = document.querySelector("#game-over");

const editPlayer1BtnEl = document.querySelector("#edit-player-1-btn");
const editPlayer2BtnEl = document.querySelector("#edit-player-2-btn");
const cancelConfigBtnEl = document.querySelector("#cancel-config-btn");
const startGameBtnEl = document.querySelector("#start-game-btn");
// const gameFieldElems = document.querySelectorAll("#game-board li");
const gameBoardEl = document.querySelector("#game-board");

editPlayer1BtnEl.addEventListener("click", openPlayerConfig);
editPlayer2BtnEl.addEventListener("click", openPlayerConfig);

cancelConfigBtnEl.addEventListener("click", closePlayerConfig);
backdropEl.addEventListener("click", closePlayerConfig);

formEl.addEventListener("submit", savePlayerConfig);

startGameBtnEl.addEventListener("click", startNewGame);

// for (const gameFieldEl of gameFieldElems) {
//   gameFieldEl.addEventListener("click", selectGameField);
// }

gameBoardEl.addEventListener("click", selectGameField);

// console.dir(editPlayer2BtnEl);
