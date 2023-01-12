const express = require('express');
const router  = express.Router();
const statusQueries = require('../db/queries/status');

router.get('/', (req, res) => {
  console.log('in status-api.js... req.session', req.session);
  // bring the order id in dynamically from the cookie session
  const orderId = req.session.orderId;
  statusQueries.getStatus(orderId)
    .then(status => {
      res.json({ status });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
