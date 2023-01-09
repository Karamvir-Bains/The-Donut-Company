$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 260) {
      console.log($(window).scrollTop());
      $("#checkout").css({ top: '25em' });
    } else {
      $("#checkout").css({ top: '31em' });
    }
  });
});
