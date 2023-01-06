$(document).ready(function() {
  // load in the menu items
  $.ajax({
    method: 'GET',
    url: '/api/status'
  })
  .done((response) => {
    const status = response.status[0].order_status;
    const $waiting = $('#waiting');
    const $confirmation = $('#confirmation');

    console.log('the order status:', response.status[0].order_status);

    if (status === 'PENDING') {
      $waiting.css('display', 'flex');
      $confirmation.css('display', 'none');
    } else {
      $waiting.css('display', 'none');
      $confirmation.css('display', 'flex');
    }

  });
}); // document.ready
