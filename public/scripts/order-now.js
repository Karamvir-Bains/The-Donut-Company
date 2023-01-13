$(document).ready(function() {
  $("#order-now").click(function() {
    $.ajax({
      method: "POST",
      url: '/order-now-send'
    })
      .done(response => {
        window.location.href = '/status';
      });
  });
});
