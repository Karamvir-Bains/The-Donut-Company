const db = require('../connection');

const getMenu = () => {
  return db.query('SELECT * FROM menu_items;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getMenu };
