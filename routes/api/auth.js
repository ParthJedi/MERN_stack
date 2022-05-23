const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const config = require('config');

//GET apis - api/auth
router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

router.post(
	'/',
	[
		check('email', 'Please enter a valid email').isEmail(),
		check('password', 'Password is required ').exists()
	],
	async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array()
				});
			}
			const { email, password } = req.body;

			try {
				const user = await User.findOne({ email });
				if (!user) {
					return res
						.status(400)
						.json({ errors: [{ message: 'Invalid Credentials' }] });
				}

				const isMatch = await bcrypt.compare(password, user.password);

				if (!isMatch) {
					return res
						.status(400)
						.json({ errors: [{ message: 'Invalid Credentials' }] });
				}

				const payload = {
					user: {
						id: user.id
					}
				};
				jwt.sign(
					payload,
					config.get('jwtSecret'),
					{ expiresIn: '36000000' },
					(err, token) => {
						if (err) throw err;
						res.send(token);
					}
				);
			} catch (error) {
				console.error(error.message);
				res.status(500).send('Server Error');
			}
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
