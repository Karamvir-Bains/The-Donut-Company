$(document).ready(function() {
  // Load in the menu items
  $.ajax({
    method: 'GET',
    url: '/api/menu'
  })
    .done((response) => {
      const $menuItems = $('#menu-items');
      // Variables to allow categories to be hard-coded
      let count = 2;
      const categories = ['Most Popular', 'Seasonal', 'Vegan', 'Gluten Free', 'Assortment'];
      // iterate through the results of the menu items query then append the HTML
      for (const i in response.items) {
      // Check for category
        count++;
        if (count % 3 === 0 && count < 18) {
          const arrayIndex = (count / 3) - 1;
          const category = $(`<li class="menu-category" id="${categories[arrayIndex]}">${categories[arrayIndex]}</li>`);
          $menuItems.append(category);
        }
        // Add menu item
        const item = response.items[i];
        const menuItem = $(`
        <li id="itemId${item.id}" class="menu-item">
          <img class="donut-thumbnail" src="/images/${item.img}" alt="${item.name}">
          <p class="item-title">${item.name}</p>
          <p class="item-desc">${item.description}</p>
          <p class="item-price">CA$${Number(item.price)/100}</p>
        </li>
      `);
        $menuItems.append(menuItem);
      }

      // Load pop-up when user clicks on menu item
      $('.menu-item').on('click', function() {
        const $itemPopup = $('#popup-item');
        const itemSrc = $(this).children('img').attr('src');
        const itemName = $(this).children('p.item-title').text();
        const itemDesc = $(this).children('p.item-desc').text();
        const itemPrice = Number($(this).children('p.item-price').text().slice(3));
        let quantity = 1;
        const popItem = $(`
        <form class="popup" id="${this.id}" method="POST" action="/checkout">
          <p id="closePopup">X</p>
          <div class="popupContainer">
            <img src="${itemSrc}" alt="${itemName}">
            <p class="popupName">${itemName}</p>
            <p class="popupDesc">${itemDesc}</p>
            <div class="quantityButtons">
              <button class="quantityButton" type="button">-</button>
              <p id="donutQuantity">${quantity}</p>
              <button class="quantityButton" type="button">+</button>
            </div>
            <button id="checkoutButton">
              <p>Add To Cart</p>
              <p id="donutTotal">CA$${itemPrice * quantity}</p>
            </button>
          </div>
        </form>
      `); // popItem
        $itemPopup.append(popItem);

        // Dim the background behing the popup using a full viewport div
        const $popupBackground = $('#popup-background');
        $popupBackground.css('display', 'block');

        // Kill the popup if user clicks outside of it or on the close icon
        const $closePopup = $('#closePopup');
        $popupBackground.add($closePopup).on('click', function() {
          $popupBackground.css('display', 'none');
          $itemPopup.empty();
        });

        // Modify quantity and order amount when -/+ buttons are clicked
        $('.quantityButton').on('click', function() {
          const $button = $(this);
          const oldValue = Number($('#donutQuantity').text());
          let newValue = oldValue;
          if ($button.text() == "+") {
            newValue++;
          } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
              newValue--;
            }
            $('#donutQuantity').text(newValue);
            // update the checkout button
            $('#donutTotal').text(`CA$${(Math.round(itemPrice * newValue *100)/100).toFixed(2)}`);
          }
        }); // .quantityButton item on click
      }); // .menu item on click
    }); // .done
}); // document.ready
