const db = require('../connection');

const getStatus = (orderId) => {
  return db.query(`SELECT * FROM orders WHERE id = ${orderId};`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getStatus };
