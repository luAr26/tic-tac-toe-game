const openPlayerConfig = (e) => {
  editedPlayer = +e.target.dataset.playerid;
  playerConfigOverlayEl.style.display = "block";
  backdropEl.style.display = "block";
};

const closePlayerConfig = () => {
  playerConfigOverlayEl.style.display = "none";
  backdropEl.style.display = "none";
  formEl.firstElementChild.classList.remove("error");
  errorsOutputElement.innerText = "";
  formEl.firstElementChild.lastElementChild.value = "";
};

const savePlayerConfig = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const enteredPlayerName = formData.get("playername").trim();

  if (!enteredPlayerName) {
    e.target.firstElementChild.classList.add("error");
    errorsOutputElement.innerText = "Please enter a valid name.";
    return;
  }

  const updatedPlayerDataEl = document.querySelector(
    `#player-${editedPlayer}-data`
  );
  updatedPlayerDataEl.children[1].innerText = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName;
  closePlayerConfig();
};
