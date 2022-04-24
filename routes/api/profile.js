const express = require('express');
const router = express.Router();

//GET apis - /profile
router.get('/', (req, res) => {
	res.send('Profile route');
});

module.exports = router;
