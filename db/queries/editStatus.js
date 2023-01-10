const db = require('../connection');

const editStatus = (orderId) => {
  return db.query(`
    UPDATE orders SET order_status = 'CONFIRMED'
    WHERE id = ${orderId}
    RETURNING *;
    `)
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { editStatus };
