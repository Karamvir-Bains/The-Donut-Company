// Combine the GET response values with the cookie session cart data, to get these values.
let itemName = "";
let itemDescription = "";
let itemPrice = 0;
let quantity = 0;

// $('').on('click', () => {
//   $.ajax({
//     method: 'GET',
//     url: '/api/menu'
//   })
//   .done((response) => {
//     const $checkoutItemList = $('#testMenuItems');
//     for (const item of response.items) {
//       const menuItem = $(`
//         <li>
//           <div class="checkout-item-row">
//             <div class="checkout-item-quantity">
//               <p>${quantity}</p>
//             </div>
//             <p class="checkout-item-title">${itemName}</p>
//             <p class="checkout-item-price">CA$${itemPrice}</p>
//           </div>
//           <p class="checkout-item-description">${itemDescription}</p>
//           <button class="checkout-item-remove">Remove</button>
//         </li>
//       `);
//       $checkoutItemList.append(menuItem);
//     }
//   });
// });

//console.log($('#checkoutButton'));

$('#popup-item').on('click', '#checkoutButton', function(event) {

  event.preventDefault();
  console.log($(this).parent().children());
  console.log($(this).parent().children('p.popupName').text());
  console.log($(this).parent().children('div.quantityButtons').children('p#donutQuantity').text());
  console.log($(this).parent().children('button#checkoutButton').children('p#donutTotal').text());


  itemName = $(this).parent().children('p.popupName').text();
  itemDescription = $(this).parent().children('p.popupDesc').text();
  itemPrice = $(this).parent().children('button#checkoutButton').children('p#donutTotal').text();
  quantity = $(this).parent().children('div.quantityButtons').children('p#donutQuantity').text();

  $.ajax({
    method: 'POST',
    dataType: 'json',
    url: '/checkout',
    data: {itemName : itemName, itemPrice : itemPrice, quantity : quantity}
  })
  .done((response) => {
    console.log(response);
  });

  alert('clicked!');

});

