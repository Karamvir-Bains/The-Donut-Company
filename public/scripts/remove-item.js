// Remove item from cart when user clicks the 'Remove' button.
$('#checkout_Items').on('click', '#remove_item', function(event) {
  event.preventDefault();
  console.log(this.parentElement);
  let itemName = $(this).parent().children('div.checkout-item-row').children('p#checkout_item_title').text();
  let itemPrice = Number($(this).parent().children('div.checkout-item-row').children('p#checkout_item_price').text().slice(3));
  let currentTotal = Number($(this).parent().parent().parent().parent().children('button#order-now').children('p#order-total').text().slice(3));
  let newTotal =  (currentTotal - itemPrice).toFixed(2);
  console.log(itemName);

  $.ajax({
    type: "POST",
    url: '/remove-cookie-item',
    data: { itemName },
  })
  .done((response) => {
    console.log(response);
    $('#order-total').text(`CA$${newTotal}`);
  });
  this.parentElement.remove();
});
