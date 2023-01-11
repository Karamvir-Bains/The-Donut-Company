const express = require('express');
const router  = express.Router();
const { MessagingResponse } = require('twilio').twiml;
const editOrder = require('../db/queries/editOrder');

// dummy data for testing purposes
const user = {
  id: 3,
  name: 'Mike',
  tel: '+15142679278'
};

router.post('/', (req, res) => {
  const twiml = new MessagingResponse();

  console.log('SMS received, req.body.Body:', req.body.Body);
  const incomingSMS = req.body.Body.toUpperCase();
  let outgoingSMS = `Hi ${user.name}, good news! Your order should be ready for pickup in `;
  let validResponse = true;

  switch (incomingSMS) {
    case 'A':
      outgoingSMS += '20-25 mins.';
      break;
    case 'B':
      outgoingSMS += '30-40 mins.';
      break;
    case 'C':
      outgoingSMS += '45-60 mins.';
      break;
    case 'D':
      outgoingSMS += 'a little over 60 mins.';
      break;
    default:
      validResponse = false;
  };

  if (validResponse) {
    // send expected prep time message to customer
    twiml.message(outgoingSMS);
    // update order status in database
    editOrder.editStatus('CONFIRMED')
      .then(order => {
        console.log(order);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  } else {
    twiml.message('Please reply just "A", "B", "C" or "D" to let the client know the expected delay for the order.');
  }

  res.type('text/xml').send(twiml.toString());
});

module.exports = router;
