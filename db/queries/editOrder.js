const db = require('../connection');

const editStatus = (status) => {
  return db.query(`
    UPDATE orders SET order_status = ${status}
    WHERE id = (SELECT MAX(id) FROM orders)
    RETURNING *;
  `)
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { editStatus };
