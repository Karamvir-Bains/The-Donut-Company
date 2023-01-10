$(document).ready(function(){
  $("#order-now").click(function(){
      $.ajax({
          type: "POST",
          url: '/order-now-send',
          success: function(response){
              console.log(response);
          }
      });
  });
});
