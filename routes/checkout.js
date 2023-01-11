const express = require('express');
const router  = express.Router();

router.post('/', (req, res) => {
  req.session.itemName = req.body.itemName;
  req.session.itemPrice = req.body.itemPrice;
  req.session.itemDescription = req.body.itemDescription;
  req.session.quantity = req.body.quantity;
  // Add user_id to cookie session



  // to send data to html
  const { itemName, itemDescription, itemPrice, quantity } = req.body;

  const itemId = Object.keys(req.session.items).length + 1;
  req.session.items[`item-${itemId}`] = { itemName, itemPrice, itemDescription, quantity };
  console.log(req.session.items)
  res.json(req.session.items);
});

module.exports = router;
