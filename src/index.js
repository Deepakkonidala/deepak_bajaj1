const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to disable CORS
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allowed methods
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers

	// Handle preflight requests
	if (req.method === 'OPTIONS') {
		return res.status(200).end();
	}

	next();
});

app.use(bodyParser.json());
app.use('/bfhl', routes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
