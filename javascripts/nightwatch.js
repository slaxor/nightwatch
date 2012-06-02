//$(document).ready(function () {
  var toggle = function () {
    var $el = $('#lamp-off');
    if($el.hasClass('hidden')) {
      $el.removeClass('hidden');
    } else {
      $el.addClass('hidden');
    }
  };

  var cutoff = function () {
    var $el = $('#lamp-off');
    $el.removeClass('hidden');
    setTimeout(function () {
      $el.addClass('hidden');
    }, 40);
  };

  setInterval(function () {
    var random = parseInt(Math.random() * 400, 10);
    setTimeout(function () {
      cutoff();
    }, random);

  }, 100);

//});

