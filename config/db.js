const mongoose = require('mongoose');
const config = require('config');

const dbURI = config.get('mongoURI');

const dbConnect = async () => {
	try {
		await mongoose.connect(dbURI);
		console.log('MongoDB conneted');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = dbConnect;
