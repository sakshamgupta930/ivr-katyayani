const express = require('express');
const router = express.Router();
const { postCallToCustomer } = require('../controller/ivr')

router.post('ivrcall', postCallToCustomer);

module.exports = router;