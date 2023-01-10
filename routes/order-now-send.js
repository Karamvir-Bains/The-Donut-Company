require('dotenv').config();

const ACCOUNT_SID = process.env.ACCOUNT_SID;
const AUTHENTICATION_TOKEN = process.env.AUTHENTICATION_TOKEN;
const MESSAGING_SERVICE_SID = process.env.MESSAGING_SERVICE_SID;
const PHONE_NUMBER = process.env.PHONE_NUMBER;
const RESTAURANT_PHONE = process.env.RESTAURANT_PHONE;

const express = require('express');
const router  = express.Router();
const client = require('twilio')(ACCOUNT_SID, AUTHENTICATION_TOKEN);



router.post('/', (req, res) => {

  let order = `New Order/ ${req.session.quantity} ${req.session.itemName}`;

  client.messages.create({
    body: order,
    messagingServiceSid: MESSAGING_SERVICE_SID,
    from: PHONE_NUMBER,
    to: RESTAURANT_PHONE
  })
  .then(message => {
    console.log(message.sid);

    res.send("Order sent to restaurant owner")
  }).catch(err => {
    console.log(err)
    res.send("There was some error. Please try again later.")
  });
});

module.exports = router;
