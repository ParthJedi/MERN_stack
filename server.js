const express = require('express');
const dbConnect = require('./config/db');

const expressApp = express();

// connext db
dbConnect();

// init middleware
expressApp.use(express.json({ extended: true }));

expressApp.get('/', (req, res) => {
	res.send('Express Server Running');
});

// routes setup
expressApp.use('/api/users', require('./routes/api/users'));
expressApp.use('/api/posts', require('./routes/api/posts'));
expressApp.use('/api/profile', require('./routes/api/profile'));
expressApp.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;
expressApp.listen(PORT, () =>
	console.log(`express server running on port: ${PORT}`)
);
