const express = require('express');
const router = express.Router();

// POST /bfhl route
router.post('/', (req, res) => {
	const { data } = req.body;
	const user_id = 'Deepak_Konidala'; // Example user_id
	const email = 'deepak.k2021@vitstudent.ac.in'; // Example email
	const roll_number = '21BCE3898'; // Example roll number

	if (!Array.isArray(data)) {
		return res
			.status(400)
			.json({ is_success: false, error: 'Invalid input data' });
	}

	let numbers = [];
	let alphabets = [];
	let highestLowercaseAlphabet = null;

	data.forEach((item) => {
		if (!isNaN(item)) {
			numbers.push(item);
		} else if (typeof item === 'string' && item.length === 1) {
			alphabets.push(item);
			if (
				item === item.toLowerCase() &&
				(!highestLowercaseAlphabet || item > highestLowercaseAlphabet)
			) {
				highestLowercaseAlphabet = item;
			}
		}
	});

	res.json({
		is_success: true,
		user_id,
		email,
		roll_number,
		numbers,
		alphabets,
		highest_lowercase_alphabet: highestLowercaseAlphabet
			? [highestLowercaseAlphabet]
			: []
	});
});

// GET /bfhl route
router.get('/', (req, res) => {
	res.status(200).json({ operation_code: 1 });
});

module.exports = router;
