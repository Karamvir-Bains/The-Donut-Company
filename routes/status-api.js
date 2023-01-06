const express = require('express');
const router  = express.Router();
const statusQueries = require('../db/queries/status');

router.get('/', (req, res) => {
  // will need to bring orderId in dynamically
  const orderId = 6;
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
