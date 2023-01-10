const express = require('express');
const router  = express.Router();
//const getUserIdQuery = require('../db/queries/userId');


router.post('/', (req, res) => {
  req.session.itemName = req.body.itemName;
  req.session.itemPrice = req.body.itemPrice;
  req.session.itemDescription = req.body.itemDescription;
  req.session.quantity = req.body.quantity;
  // Add user_id to cookie session
  //getUserIdQuery.getUserIdByUserName(req.body.userName).then((userId) => {
    //req.session.user_id = userId;
  //}).catch((error) => {
  //  console.error(error);
  //});

  // to send data to html
  const { itemName, itemDescription, itemPrice, quantity } = req.body;

  console.log('session', req.session);

  req.session.itemName = itemName;
  req.session.itemPrice = itemPrice;
  req.session.itemDescription = itemDescription;
  req.session.quantity = quantity;

  res.json({ itemName, itemDescription, itemPrice, quantity });
});

module.exports = router;
