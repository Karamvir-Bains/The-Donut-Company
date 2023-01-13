// Use localhost:8080/login/3 to login as user 3

const express = require('express');
const router  = express.Router();

router.get('/:user_id', (req, res) => {
  // set cookie
  req.session.user_id = req.params.user_id;
  console.log('login session', req.session);

  // send the user to home page
  res.redirect('/');
});

module.exports = router;
