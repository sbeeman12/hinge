$(document).ready(function () {
  var wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6]
  ]
  var gameBoard = [0,0,0,0,0,0,0,0,0];
  var currentPlayer = 1;

  var resetGame = function() {
    gameBoard = [0,0,0,0,0,0,0,0,0];
    currentPlayer = 1;
    $('.cell').removeClass('playerx');
    $('.cell').removeClass('playero');
    $('.cell').text('');
  }

  var checkWin = function() {
    wins.forEach(function (win) {
      var total = 0;
      win.forEach(function (i) {
        total += gameBoard[i];
      })
      if (total == 3) {
        alert('Player 1 wins!');
        resetGame();
      }
      else if (total == -3) {
        alert('Player 2 wins!');
        resetGame();
      }
    })
  }

  $('.cell').bind('click', function() {
    if ($(this).hasClass('playerx') || $(this).hasClass('playero')) {
      return;
    }
    else if (currentPlayer == 1) {
      $(this).addClass('playerx');
      $(this).text('X');
      var cellno = parseInt($(this).attr('data-cellno'));
      gameBoard[cellno] = 1;
      checkWin();
      currentPlayer = -1;
    }
    else {
      $(this).addClass('playero');
      $(this).text('O')
      var cellno = parseInt($(this).attr('data-cellno'));
      gameBoard[cellno] = -1;
      checkWin();
      currentPlayer = 1;
    }
  })
});
