const db = require('../connection');

// guessing cookie session object here...
const sessionItems = {
  'item-1': {
    user_id: 3,
    itemId: 3,
    itemName: 'Sugar Top',
    itemPrice: 'CA$2.99',
    itemDescription: 'Topped with powdered sugar.',
    quantity: '1'
  },
  'item-2': {
    user_id: 3,
    itemId: 1,
    itemName: 'Pink Sprinkle',
    itemPrice: 'CA$4.99',
    itemDescription: 'Iconic pink frosting, topped with sprinkles.',
    quantity: '1'
  }
};

for (item in sessionItems) {
  console.log(sessionItems[item].itemId);
}

// second, now we have the order id, add the items to the orders_menu_items table
const addOrderItems = (orderId) => {
  let buildString = 'INSERT INTO orders_menu_items (order_id, item_id, quantity) VALUES';
  const items = sessionObj.items;
  for (item of items) {
    buildString += `(${orderId}, ${item.itemId}, ${item.quantity}),`;
  }
  // replace the final comma with a semi-colon
  const queryString = buildString.replace(/,$/,';')
  return db
    .query(queryString)
    .then(data => {

    });
};

// first, add the new order to the orders table, returning the new order id
const newOrder = (order) => {
  return db.query(`
    INSERT INTO orders (user_id, order_status)
    VALUES (${sessionObj.user_id}, 'PENDING')
    RETURNING id;
    `)
    .then(data => {
      return addOrderItems(data.rows[0].id);
    });
};

module.exports = { newOrder };
