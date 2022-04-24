const express = require('express');
const router = express.Router();

//GET apis - /users
router.get('/', (req, res) => res.send('User route'));

module.exports = router;
