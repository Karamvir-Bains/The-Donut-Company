let previousStatus = undefined;
let orderStartTime = undefined;

$(document).ready(function() {

  const requestInterval = setInterval(function() {
    $.ajax({
      type: "GET",
      url: '/api/status',
    })
      .done((response) => {
        const orderStatus = response.status["0"]["order_status"];
        handleProgressBar();
        if (orderStatus === previousStatus) return;
        previousStatus = orderStatus;
        if (orderStatus === "CONFIRMED") {
          orderStartTime = Date.now();
          const estimateTime = fetchTime();
          $("#estimate-time").text(`Estimate ${estimateTime} minutes`);
          $("#waiting").css("display", "none");
          $("#confirmation").css("display", "flex");
        }

        if (orderStatus === "FULFILLED") {
          $("#order-message").text("The restaurant has finsihed you order");
          $("#estimate-time").text("");
          $("#ready").css("background-color", "lightgreen");
          clearInterval(requestInterval);
        }

        if (orderStatus === "CANCELLED") {
          $("#order-message").text("The restaurant has cancelled your order");
          $("#estimate-time").text("");
          $("#current-status").css("visibility", "hidden");
          clearInterval(requestInterval);
        }
      });
  }, 2000);
});

const fetchTime = function(response) {
  return response.status["0"]["estimate_order_time"];
};

const handleProgressBar = function() {
  const currentTime = Date.now();
  if (!orderStartTime) return;
  if ((currentTime - orderStartTime) > 15000) {
    $("#finishing").css("background-color", "lightgreen");
  }
};
