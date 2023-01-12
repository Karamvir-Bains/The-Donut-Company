const express = require('express');
const router  = express.Router();
const statusQueries = require('../db/queries/status');

router.get('/', (req, res) => {
  console.log('in status-api.js... req.session', req.session);
  // will need to bring orderId in dynamically
  const orderId = 1;
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
