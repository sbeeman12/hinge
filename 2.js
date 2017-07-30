$(document).ready(function () {
  var current_player = 0;

  $('.cell').bind('click', function() {
    if ($(this).hasClass('playerx') || $(this).hasClass('playero')) {
      return;
    }
    else if (current_player == 0) {
      $(this).addClass('playerx');
      $(this).text('X');
      current_player = 1;
    }
    else {
      $(this).addClass('playero');
      $(this).text('O')
      current_player = 0;
    }
  })
});
