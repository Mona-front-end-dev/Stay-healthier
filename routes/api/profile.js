const express = require('express');
const router = express.Router();

// @route  GET api/users
// @desc   Test route
// @Access Public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;
