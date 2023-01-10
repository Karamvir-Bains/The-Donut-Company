const express = require('express');
const router  = express.Router();
const { MessagingResponse } = require('twilio').twiml;
const editStatus = require('../db/queries/editStatus');

// dummy data for testing purposes
const user = {
  id: 3,
  name: 'Mike',
  tel: '+15142679278'
};

const order = {
  id: 7
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
    editStatus.editStatus(order.id)
      .then(order => {
        console.log(order);
        // res.json({ items });
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

/*
  if (req.body.Body === 'confirm') {
    twiml.message('How long will the order take?\nA) 20-25 mins\nB) 30-40 mins\nC) 45-60 mins\nD) 60+ mins');
  } else if (req.body.Body === 'decline') {
    twiml.message('Order has been declined');
  } else {
    twiml.message(
      'Respond to this message with either "confirm" or "decline"'
    );
  }
*/
