const express = require('express');
const router  = express.Router();
const menuQueries = require('../db/queries/menu');

router.get('/', (req, res) => {
  menuQueries.getMenu()
    .then(items => {
      res.json({ items });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
