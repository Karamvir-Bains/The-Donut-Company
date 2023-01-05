// Client facing scripts here
$(document).ready(function() {
  // load in the menu items
  $.ajax({
    method: 'GET',
    url: '/api/menu'
  })
  .done((response) => {
    // console.log(response);
    const $menuItemList = $('#testMenuItems');

    for (const item of response.items) {
      const itemHTML = `<li>${item.name}</li>`;
      $menuItemList.append(itemHTML);
      console.log(item.name);
    }

  });

}); // document.ready
