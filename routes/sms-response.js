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

  // testing to find user name and order id values
  console.log('in sms-response.js post:', req.session);
  return;

  const twiml = new MessagingResponse();

  console.log('SMS received, req.body.Body:', req.body.Body);
  const incomingSMS = req.body.Body.toUpperCase();
  let outgoingSMS = `Hi ${user.name}, good news! Your order should be ready for pickup in `;
  let delayText = '';
  let validResponse = true;
  let orderStatus = 'CONFIRMED';

  switch (incomingSMS) {
    case 'A':
      delayText = '20-25 mins.';
      outgoingSMS += delayText;
      break;
    case 'B':
      delayText = '30-40 mins.';
      outgoingSMS += delayText;
      break;
    case 'C':
      delayText = '45-60 mins.';
      outgoingSMS += delayText;
      break;
    case 'D':
      delayText = 'a little over 60 mins.';
      outgoingSMS += delayText;
      break;
    case 'READY':
      outgoingSMS = 'Hello again from The Donut Company!\nYour order is now ready to be picked up... see you soon!';
      orderStatus = 'FULFILLED';
      break;
    default:
      validResponse = false;
  };

  if (validResponse) {

    console.log('in validresponse, orderStatus =', orderStatus);

    // send expected prep time message to customer
    twiml.message(outgoingSMS);
    // update order status in database
    editOrder.editStatus(orderStatus, delayText)
      .then(order => {
        console.log(order);
      })
      .catch(err => {
        res
          .status(500)
          // .json({ error: err.message });
      });
  } else {
    twiml.message('Please reply just "A", "B", "C" or "D" to let the client know the expected delay for the order.');
  }

  res.type('text/xml').send(twiml.toString());
});

module.exports = router;
