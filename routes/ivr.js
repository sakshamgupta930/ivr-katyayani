const express = require('express');
const { postCallToCustomer } = require('../controller/ivr')
const router = express.Router();

router.post('/ivrcall', postCallToCustomer);

module.exports = router;