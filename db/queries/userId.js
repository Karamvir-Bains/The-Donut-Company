const db = require('../connection');

const getUserIdByUserName = function(username) {
  return db.query(`SELECT id FROM users WHERE name = '${username}'`)
    .then(data => {
      console.log('ID', data.rows);
      return data.rows;
    });
}

module.exports = { getUserIdByUserName };
