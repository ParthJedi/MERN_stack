const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
	const token = req.header('x-auth-token');

	if (!token) {
		return res
			.status(401)
			.json({ msg: 'Token not found, authorization denied' });
	}

	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'));
		req.user = decoded.user;
		next();
	} catch (error) {
		return res.status(401).json({ msg: 'Token is invalid' });
	}
};
