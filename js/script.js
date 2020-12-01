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
    return "Ja wygrywam!";
  } else {
    return "Ty wygrywasz!";
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage("Mój ruch to: " + computerMove);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

let playerMove = getMoveName(playerInput);

printMessage("Twój ruch to: " + playerMove);

printMessage(getResult(computerMove, playerMove));