require('dotenv').config();
const addOrder = require('../db/queries/insertOrder');


const ACCOUNT_SID = process.env.ACCOUNT_SID;
const AUTHENTICATION_TOKEN = process.env.AUTHENTICATION_TOKEN;
const MESSAGING_SERVICE_SID = process.env.MESSAGING_SERVICE_SID;
const PHONE_NUMBER = process.env.PHONE_NUMBER;
const RESTAURANT_PHONE = process.env.RESTAURANT_PHONE;

const express = require('express');
const router  = express.Router();
const client = require('twilio')(ACCOUNT_SID, AUTHENTICATION_TOKEN);
const getUserNameQuery = require('../db/queries/nameById');

router.post('/', (req, res) => {
  addOrder.newOrder(req.session);

  const sessionMsgBody = function () {
    let messageBody = '';
    let items = [];
    const sessionItems = req.session.items;
    for (const itemKey in sessionItems) {
      let item = sessionItems[itemKey];
      items.push(`${item.quantity}x ${item.itemName}`);
    }
    return items.join('\n');
  };

  // use async wait to get username from db by user_id ( Promise ).
  async function sendSmsWithUsername(user_id){
  let username;
    try {
      let data = await getUserNameQuery.getUserNameById(req.session.user_id);
      console.log(data[0].name);
      username = data[0].name;
    } catch(error) {
       console.error(error);
    }
    messageBody = `New Order Request from ${username}:\n\n${sessionMsgBody()}\n\nHow long will the order take?\nA) 20-25 mins\nB) 30-40 mins\nC) 45-60 mins\nD) 60+ mins`;
    client.messages.create({
      body: messageBody,
      messagingServiceSid: MESSAGING_SERVICE_SID,
      from: PHONE_NUMBER,
      to: RESTAURANT_PHONE
    })
    .then(message => {
      console.log(message.sid);
      req.session = null;
      res.render('status');
      // res.send("Order sent to restaurant owner")
    }).catch(err => {
      console.log(err)
      res.send("There was some error. Please try again later.")
    });
  }

  sendSmsWithUsername(req.session.user_id);

});

module.exports = router;
