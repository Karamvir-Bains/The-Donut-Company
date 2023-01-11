const db = require('../connection');

const editStatus = (status) => {
  return db.query(`
    UPDATE orders SET order_status = ${status}
    WHERE id = (SELECT MAX(id) FROM orders)
    RETURNING *;
  `)
    .then(data => {
      return data.rows[0];
      console.log('editStatus', data.rows[0]);
    });
};

const addOrderEnded = (delay) => {
  return db.query(`
    UPDATE orders SET order_ended = (NOW() + interval '${delay} minute')
    WHERE id = (SELECT MAX(id) FROM orders)
    RETURNING *;
  `)
    .then(data => {
      return data.rows[0];
      console.log('addOrderEnded', data.rows[0]);
    });
};

module.exports = { editStatus, addOrderEnded };
