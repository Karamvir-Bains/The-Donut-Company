const express = require('express');
const router  = express.Router();
// const getUserNameQuery = require('../db/queries/nameById');


router.post('/', (req, res) => {
  // req.session.itemName = req.body.itemName;
  // req.session.itemPrice = req.body.itemPrice;
  // req.session.itemDescription = req.body.itemDescription;
  // req.session.quantity = req.body.quantity;
  // Add user_id to cookie session

  // req.session.user_id = req.body.user_id;
  // console.log(req.session.user_id);
  // console.log('checkout body', req.body);
  // Add username to cookie session
  // getUserNameQuery.getUserNameById(req.body.userName).then((userId) => {
  //   req.session.username = req.body.username;
  // }).catch((error) => {
  //  console.error(error);
  // });



  // to send data to html
  const { itemName, itemDescription, itemPrice, quantity } = req.body;

  const itemId = Object.keys(req.session.items).length + 1;
  req.session.items[`item-${itemId}`] = { itemName, itemPrice, itemDescription, quantity };
  console.log(req.session.items)
  res.json(req.session.items);
});

module.exports = router;
