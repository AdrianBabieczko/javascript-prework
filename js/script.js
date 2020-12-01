function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return "kamień";
  } else if (randomNumber == 2) {
    return "papier";
  } else if (randomNumber == 3) {
    return "nozyce";
  } else {
    printMessage("Nie znam ruchu o id " + argMoveId + ".");
    return "nieznany ruch";
  }
}

function getResult(compMove, userMove) {
  if (computerMove == "nieznany ruch" || userMove == "nieznany ruch") {
    return "Coś poszło nie tak. Spróbuj jeszcze raz!";
  }

  if (compMove === userMove) {
    return "Remis!";
  } else if (
    (compMove == "kamień" && userMove == "nozyce") ||
    (compMove == "papier" && userMove == "kamień") ||
    (compMove == "nozyce" && userMove == "papier")
  ) {
    return "Tym razem przegrywasz :(";
  } else {
    return "Ty wygrywasz!";
  }
}

function displayResult(argComputerMove, argPlayerMove) {
  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

  printMessage(getResult(computerMove, playerMove));
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
let playerMove = getMoveName(playerInput);

displayResult(computerMove, playerMove);