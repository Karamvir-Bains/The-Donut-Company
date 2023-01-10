// Combine the GET response values with the cookie session cart data, to get these values.
let itemName = "";
let itemDescription = "";
let itemPrice = 0;
let quantity = 0;

// const userName = $('#user_name').children('a').text();

$('#popup-item').on('click', '#checkoutButton', function(event) {
  event.preventDefault();
  itemName = $(this).parent().children('p.popupName').text();
  itemDescription = $(this).parent().children('p.popupDesc').text();
  itemPrice = $(this).parent().children('button#checkoutButton').children('p#donutTotal').text();
  quantity = $(this).parent().children('div.quantityButtons').children('p#donutQuantity').text();

  $.ajax({
    method: 'POST',
    dataType: 'json',
    url: '/checkout',
    data: {itemName, itemPrice, itemDescription, quantity}
  })
  .done((response) => {
    const { itemName, itemDescription, itemPrice, quantity } = response;

    // Update HTML with the data
    const $checkoutItems = $('#checkout_Items')
    const checkoutItem = `
        <div class="checkout-item-row">
          <div class="checkout-item-quantity">
            <p>${quantity}</p>
          </div>
          <p id="checkout_item_title" class="checkout-item-title">${itemName}</p>
          <p id="checkout_item_price" class="checkout-item-price">${itemPrice}</p>
        </div>
        <p id="checkout_item_desc" class="checkout-item-description">${itemDescription}</p>
        <button class="checkout-item-remove">Remove</button>
    `;
    $checkoutItems.append(checkoutItem);
    $('#popup-item').hide();
    $('#popup-background').hide();
  });

});

