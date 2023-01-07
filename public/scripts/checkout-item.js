// Combine the GET response values with the cookie session cart data, to get these values.
const itemName = "";
const itemDescription = "";
const itemPrice = 0;
const quantity = 0;

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
