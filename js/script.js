{
  const rock = "kamien";
  const paper = "papier";
  const scissors = "nozyce";
  const unknowMove = "nieznany ruch";

  function playGame(playerInput) {
    clearMessages();

    function getMoveName(argMoveId) {
      if (argMoveId == 1) {
        return rock;
      }

      if (argMoveId == 2) {
        return paper;
      }

      if (argMoveId == 3) {
        return scissors;
      }

      printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return unknowMove;
    }

    function displayResult(argComputerMove, argPlayerMove) {
      printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

      const gameResult = function (argComputerMove, argPlayerMove) {
        const draw = "Remis";

        if (computerMove == unknowMove || userMove == unknowMove) {
          return "Coś poszło nie tak. Spróbuj jeszcze raz!";
        }

        if (compMove === userMove) {
          return draw;
        }

        if (
          (compMove == rock && userMove == scissors) ||
          (compMove == paper && userMove == rock) ||
          (compMove == scissors && userMove == paper)
        ) {
          return "Tym razem przegrywasz :(";
        }

        return "Ty wygrywasz!";
      };

      printMessage(gameResult);
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);
  }

  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
  });

  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
  });

  document
    .getElementById("play-scissors")
    .addEventListener("click", function () {
      playGame(3);
    });
}
