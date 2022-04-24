const express = require('express');

const expressApp = express();
const PORT = process.env.PORT || 5000;
expressApp.listen(PORT, () =>
	console.log(`express server running on port: ${PORT}`)
);

expressApp.get('/', (req, res) => {
	res.send('Express Server Running');
});
