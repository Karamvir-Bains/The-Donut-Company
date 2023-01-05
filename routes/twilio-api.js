// load .env data into process.env
require('dotenv').config();

const ACCOUNT_SID = process.env.ACCOUNT_SID;
const AUTHENTICATION_TOKEN = process.env.AUTHENTICATION_TOKEN;
const MESSAGING_SERVICE_SID = process.env.MESSAGING_SERVICE_SID;
const PHONE_NUMBER = process.env.PHONE_NUMBER;

const express = require('express');
const router  = express.Router();
const client = require('twilio')(ACCOUNT_SID, AUTHENTICATION_TOKEN);

router.get('/', (req, res) => {
  client.messages
    .create({
      body: 'Test',
      messagingServiceSid: MESSAGING_SERVICE_SID,
      to: PHONE_NUMBER
    })
    .then(message => console.log(message.sid))
    .done();
});

module.exports = router;
