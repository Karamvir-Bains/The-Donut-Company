$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 260) {
      $("#checkout").css({ top: '25em' });
    } else {
      $("#checkout").css({ top: '31em' });
    }
  });
});
