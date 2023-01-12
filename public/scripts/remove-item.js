
$('#checkout_Items').on('click', '#remove_item', function(event) {
  event.preventDefault();
  console.log(this.parentElement);
  let itemName = $(this).parent().children('div.checkout-item-row').children('p#checkout_item_title').text();
  console.log(itemName);

  $.ajax({
    type: "POST",
    url: '/remove-cookie-item',
    data: { itemName },
  })
  .done((response) => {
    console.log(response);
  });


  this.parentElement.remove();
});
