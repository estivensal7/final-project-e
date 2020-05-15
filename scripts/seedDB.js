// Dependencies
const mongoose = require("mongoose");
const db = require("../models");
//This file empties the Donation & Users collections and inserts the Donation & users below
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/donations",
	{ useUnifiedTopology: true, useNewUrlParser: true }
);
const donations = [
	{
		eventName: "Name of Event",
		eventDate: new Date(Date.now()),
		lunchNumber: 200,
		eventDescription:
			"These lunches will be available from 11am-2pm, Address Here/Phonenumber",
		userName: "sampleUsername1",
	},
];
db.Donation.remove({})
	.then(() => db.Donation.collection.insertMany(donations))
	.then((data) => {
		console.log(data.result.n + " records inserted!");
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
