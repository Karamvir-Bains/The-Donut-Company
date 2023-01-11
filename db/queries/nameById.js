const db = require('../connection');

const getUserNameById = function(user_id) {
  return db.query(`SELECT name FROM users WHERE id = '${user_id}'`)
    .then(data => {
      console.log('name', data.rows);
      return data.rows;
    });
}

module.exports = { getUserNameById };
