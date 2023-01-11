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
          const estimateTime = fetchTime(response);
          handleEstimateText(`Estimate ${estimateTime} minutes`);
          waitingVisibilityHidden();
        }

        if (orderStatus === "FULFILLED") {
          console.log("runs");
          waitingVisibilityHidden();
          $("#finishing").css("background-color", "lightgreen");
          $("#order-message").text("The restaurant has finished you order");
          handleEstimateText("");
          $("#ready").css("background-color", "lightgreen");
          clearInterval(requestInterval);
        }

        if (orderStatus === "CANCELLED") {
          waitingVisibilityHidden();
          handleOrderMessage("The restaurant has cancelled your order");
          handleEstimateText("");
          $("#current-status").css("visibility", "hidden");
          clearInterval(requestInterval);
        }
      });
  }, 2000);
});

const fetchTime = function(response) {
  return response.status["0"]["estimated_order_time"];
};

const handleProgressBar = function() {
  const currentTime = Date.now();
  if (!orderStartTime) return;
  if ((currentTime - orderStartTime) > 15000) {
    $("#finishing").css("background-color", "lightgreen");
  }
};

const waitingVisibilityHidden = function() {
  $("#waiting").css("display", "none");
  $("#confirmation").css("display", "flex");
};

const handleEstimateText = function(text) {
  $("#estimate-time").text(`${text}`);
};

const handleOrderMessage = function(text) {
  $("#order-message").text(`${text}`);
};
