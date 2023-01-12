$(document).ready(function() {
  $("#order-now").click(function() {
    $.ajax({
      method: "POST",
      url: '/order-now-send'
    })
      .done(response => {
        console.log(response);
        window.location.href = '/status';
      });
  });
});
