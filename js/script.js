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

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage("Mój ruch to: " + computerMove);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

let playerMove = getMoveName(playerInput);

printMessage("Twój ruch to: " + playerMove);

if (computerMove == "kamień" && playerMove == "papier") {
  printMessage("Ty wygrywasz!");
}

if (computerMove == "kamień" && playerMove == "kamień") {
  printMessage("Remis!");
}

if (computerMove == "kamień" && playerMove == "nozyce") {
  printMessage("Ja wygrywam!");
}

if (computerMove == "papier" && playerMove == "papier") {
  printMessage("Remis!");
}

if (computerMove == "papier" && playerMove == "kamień") {
  printMessage("Ja wygrywam!");
}

if (computerMove == "papier" && playerMove == "nozyce") {
  printMessage("Ty wygrywasz!");
}

if (computerMove == "nozyce" && playerMove == "papier") {
  printMessage("Ja wygrywam!");
}

if (computerMove == "nozyce" && playerMove == "kamień") {
  printMessage("Ty wygrywasz!");
}

if (computerMove == "nozyce" && playerMove == "nozyce") {
  printMessage("Remis!");
}

if (computerMove == "nieznany ruch" || playerMove == "nieznany ruch") {
  printMessage("Coś poszło nie tak. Spróbuj jeszcze raz!");
}
