const express = require('express');
const router  = express.Router();

router.post('/', (req, res) => {
  let itemNameToRemove = req.body.itemName;
  const filteredcookie = req.session.items.filter(function(item) { return item.itemName != itemNameToRemove; });

  req.session.items = filteredcookie;
  console.log('sessionAfterRemove', req.session.items);
  res.json(req.session.items);

})

module.exports = router;
