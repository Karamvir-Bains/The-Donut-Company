const db = require('../connection');

/* Function to update and order in the orders table.
 * Receives order_status and delay as parameters.
 */
const editStatus = (status, delay) => {
  // When updating status as 'FULFILLED' the delay will be an empty string ('').
  if (delay === '') {
    delay = 'Ready for pickup.';
  }

  return db.query(`
    UPDATE orders
    SET order_status = '${status}',
        estimated_order_time = '${delay}'
    WHERE id = (SELECT MAX(id) FROM orders)
    RETURNING *;
  `)
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { editStatus };
