function playGame(playerInput) {

  clearMessages();

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return "kamień";
    }

    if (argMoveId == 2) {
      return "papier";
    }

    if (argMoveId == 3) {
      return "nozyce";
    }

    printMessage("Nie znam ruchu o id " + argMoveId + ".");
    return "nieznany ruch";
  }

  function getResult(compMove, userMove) {
    if (computerMove == "nieznany ruch" || userMove == "nieznany ruch") {
      return "Coś poszło nie tak. Spróbuj jeszcze raz!";
    }

    if (compMove === userMove) {
      return "Remis!";
    }

    if (
      (compMove == "kamień" && userMove == "nozyce") ||
      (compMove == "papier" && userMove == "kamień") ||
      (compMove == "nozyce" && userMove == "papier")
    ) {
      return "Tym razem przegrywasz :(";
    }

    return "Ty wygrywasz!";
  }

  function displayResult(argComputerMove, argPlayerMove) {
    printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

    printMessage(getResult(computerMove, playerMove));
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  let playerMove = getMoveName(playerInput);

  displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});