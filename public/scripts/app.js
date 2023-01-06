$(document).ready(function() {
  // load in the menu items
  $.ajax({
    method: 'GET',
    url: '/api/menu'
  })
  .done((response) => {
    // I added a div element to index.ejs just to append the results to...
    const $menuItemList = $('#testMenuItems');
    // iterate through the results and append the HTML
    for (const item of response.items) {
      const menuItem = $(`
        <form method="POST" action="">
          <button style="width: 200px; padding: 0; border: 0;">
            <img src="/images/${item.img}" alt="${item.name}" width="200" height="200">
            <p style="text-align: start; margin-left: 1em;">${item.name}</p>
            <p style="text-align: start; margin-left: 1em;">${item.description}</p>
            <p style="text-align: start; margin-left: 1em;">CA$${Number(item.price)/100}</p>
          </button>
        </form>
      `);
      $menuItemList.append(menuItem);
    }
  });
}); // document.ready
