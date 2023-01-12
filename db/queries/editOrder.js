const db = require('../connection');

const editStatus = (status, delay) => {
  // if we are updating status as 'FULFILLED', delay will be ''
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
