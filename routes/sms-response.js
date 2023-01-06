const express = require('express');
const router  = express.Router();
const { MessagingResponse } = require('twilio').twiml;

router.post('/', (req, res) => {
  const twiml = new MessagingResponse();

  if (req.body.Body === 'confirm') {
    twiml.message('How long will the order take?\nA) 20-25 mins\nB) 30-40 mins\nC) 45-60 mins\nD) 60+ mins');
  } else if (req.body.Body === 'decline') {
    twiml.message('Order has been declined');
  } else {
    twiml.message(
      'Respond to this message with either "confirm" or "decline"'
    );
  }

  res.type('text/xml').send(twiml.toString());
});

module.exports = router;
