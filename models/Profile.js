const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
	},
	company: {
		type: string,
	},
	website: {
		type: string,
	},
	location: {
		type: string,
	},
	status: {
		type: string,
		required: true,
	},
	skills: {
		type: [string],
		required: true,
	},
	bio: {
		type: string,
	},
	githubUsername: {
		type: string,
	},
	experience: [
		{
			title: {
				type: string,
				required: true,
			},
			company: {
				type: string,
				required: true,
			},
			location: {
				type: string,
			},
			from: {
				type: Date,
				required: true,
			},
			to: {
				type: Date,
			},
			current: {
				type: Boolean,
				default: false,
			},
			description: {
				type: string,
			},
		},
	],
	education: [
		{
			school: {
				type: string,
				required: true,
			},
			degree: {
				type: string,
				required: true,
			},
			fieldOfStudy: {
				type: string,
				required: true,
			},
			from: {
				type: Date,
				required: true,
			},
			to: {
				type: Date,
			},
			current: {
				type: Boolean,
			},
			description: {
				type: string,
			},
		},
	],
	social: {
		youtube: {
			type: string,
		},
		twitter: {
			type: string,
		},
		facebook: {
			type: string,
		},
		linkedin: {
			type: string,
		},
		instagram: {
			type: string,
		},
	},
	Date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Profile = mongoose.model('profile', profileSchema);
