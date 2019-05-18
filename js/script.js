


var argButtonName, buttonPaper, buttonRock, buttonScissors, buttonTest,userWin=0,userWin1=0, userWin2=0,userWin3=0,compWin=0, remis=0, rundy=0;


function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber ;

  
  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }
  
  
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
      userWin1++;
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!');
      userWin2++;
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage('Wygrywasz!')  ;
      userWin3++;
    } else if (argComputerMove == argPlayerMove) {
      printMessage('Remis');
      remis++;
    } else {
      printMessage('Przegrywasz :(');
      compWin++;
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty zagrałeś ' + argPlayerMove);
    userWin=userWin1+userWin2+userWin3;
    rundy=userWin+compWin+remis;
    
    
  }
  argComputerMove = 0;
  playerMove = argButtonName;
  console.log('wybór ruchu gracza to: ' + playerInput);
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
  //printMessage('wygrałem '+userWin+ ' razy');
  //printMessage('wygrałeś '+compWin+ ' razy');
  document.getElementById('wynik_gracza').value=userWin ;
  document.getElementById('wynik_compa').value=compWin ;
  document.getElementById('remis').value=remis ;
  document.getElementById('rundy').value=rundy ;

}

buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });


