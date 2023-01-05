const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('test-sms');
});

module.exports = router;
