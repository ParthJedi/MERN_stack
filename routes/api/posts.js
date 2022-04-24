const express = require('express');
const router = express.Router();

//GET apis - /posts
router.get('/', (req, res) => {
	res.send('Posts route');
});

module.exports = router;
