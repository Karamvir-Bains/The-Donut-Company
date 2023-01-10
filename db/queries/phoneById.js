const db = require('../connection');

const userPhoneNumberById = function(user_id) {
  return db.query(`SELECT phone FROM users WHERE id = '${user_id}'`)
    .then(data => {
      console.log('phone', data.rows);
      return data.rows;
    });
}

module.exports = { userPhoneNumberById };
