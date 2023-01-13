const db = require('../connection');

/* Function adds the items from the order to the orders_menu_items table.
 * Receives the cookie session object and the order_id as parameters.
 * Returns the order_id
 */
const addOrderItems = (orderId, order) => {
  let buildString = 'INSERT INTO orders_menu_items (order_id, item_id, quantity) VALUES';
  const items = order.items;
  for (item of items) {
    buildString += `(${orderId}, ${item.itemId}, ${item.quantity}),`;
  }
  // replace the final comma with a semi-colon
  const queryString = buildString.replace(/,$/,';')
  return db
    .query(queryString)
    .then(data => {
      return orderId;
    });
};

/* Function adds a new order to the orders table,
 * then calls the addOrderItems function to add the items to the orders_menu_items table.
 * Receives the cookie session object as a parameter.
 * Returns the newly generated order id.
 */
const newOrder = (order) => {
  const orderId = order.user_id;

  return db.query(`
    INSERT INTO orders (user_id, order_status)
    VALUES (${orderId}, 'PENDING')
    RETURNING id;
    `)
    .then(data => {
      return addOrderItems(data.rows[0].id, order);
    });
};

module.exports = { newOrder };
