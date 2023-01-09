const express = require('express');
const router  = express.Router();

router.post('/', (req, res) => {
  console.log('test');
  console.log(req.session.itemName);
  console.log(req.body);
  const itemName = req.body.itemName
  const username = req.body.username;
  res.cookie('itemName', itemName);
  res.redirect('/');

});

module.exports = router;
