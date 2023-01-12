// Combine the GET response values with the cookie session cart data, to get these values.
let itemName = "";
let itemDescription = "";
let itemPrice = 0;
let quantity = 0;
let pricesArr = [];

// const userName = $('#user_name').children('a').text();

$('#popup-item').on('click', '#checkoutButton', function(event) {
  event.preventDefault();
  itemName = $(this).parent().children('p.popupName').text();
  itemDescription = $(this).parent().children('p.popupDesc').text();
  itemPrice = $(this).parent().children('button#checkoutButton').children('p#donutTotal').text();
  quantity = $(this).parent().children('div.quantityButtons').children('p#donutQuantity').text();
  itemId = Number($(this).closest('form').attr('id').slice(6));

  $.ajax({
    method: 'POST',
    dataType: 'json',
    url: '/checkout',
    data: {itemId, itemName, itemPrice, itemDescription, quantity}
  })
  .done((response) => {
    // Update HTML with the data
    let checkoutItem = '';
    const $checkoutItems = $('#checkout_Items');
    for (const itemKey in response) {
      let item = response[itemKey];
      checkoutItem = `
        <li>
          <div class="checkout-item-row">
            <div class="checkout-item-quantity">
              <p>${item.quantity}</p>
            </div>
            <p id="checkout_item_title" class="checkout-item-title">${item.itemName}</p>
            <p id="checkout_item_price" class="checkout-item-price">${item.itemPrice}</p>
          </div>
          <p id="checkout_item_desc" class="checkout-item-description">${item.itemDescription}</p>
          <button id="remove_item" class="checkout-item-remove">Remove</button>
        </li>
      `;
    }
    $checkoutItems.append(checkoutItem);

    // sum order total and add it to order now btn
    pricesArr.push(itemPrice.slice(3));
    let orderTotal = pricesArr.reduce((a,b) => {
      return parseFloat(a) + parseFloat(b);
    });
    $('#order-total').text(`CA$${orderTotal}`);

    // $('#popup-item').hide();
    // $('#popup-background').hide();
    // Mike trying to debug code....
    $('#popup-background').css('display', 'none');
    $('#popup-item').empty();
  });

});

