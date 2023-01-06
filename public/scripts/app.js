$(document).ready(function() {
  // load in the menu items
  $.ajax({
    method: 'GET',
    url: '/api/menu'
  })
  .done((response) => {
    // I added a div element to index.ejs just to append the results to...
    const $menuItems = $('#menu-items');
    // iterate through the results and append the HTML
    for (const item of response.items) {
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
  });

  // load pop-up when user clicks on menu item


}); // document.ready
