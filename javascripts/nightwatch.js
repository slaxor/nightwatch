$(document).ready(function () {
  var cutoff = function () {
    var $el = $('#lamp-off');
    $el.removeClass('hidden');
    setTimeout(function () {
      $el.addClass('hidden');
    }, 40);
  };

  setInterval(function () {
    var random = parseInt(Math.random() * 400, 10);
    var to = setTimeout(function () {
      cutoff();
    }, random);
    console.log(to);
  }, 100);

});

