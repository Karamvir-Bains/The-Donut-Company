const db = require('../connection');

const getMenu = () => {
  return db.query('SELECT * FROM menu_items ORDER BY id ASC;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getMenu };
