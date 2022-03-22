const express = require('express');
const { route } = require('./auth');
const router = express.Router();

// @route  GET api/users
// @desc   Test route
// @Access Public
router.get('/', (req, res) => res.send('User route'));

module.exports = router;
