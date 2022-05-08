const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

//@route		GET  api/profile/me
//@desc			get current users profile
//@access		private
router.get('/me', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id }).populate(
			'user',
			['name', 'avatar']
		);
		if (!profile) {
			return res.status(400).json({ msg: 'There is no profile for this user' });
		}
		res.json(profile);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

//@route		POST  api/profile
//@desc			create or update a user profile
//@access		private

router.post(
	'/',
	[
		auth,
		[
			check('status', 'status is required').not().isEmpty(),
			check('skills', 'skills is required').not().isEmpty(),
		],
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
	}
);

module.exports = router;
