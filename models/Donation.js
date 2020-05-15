// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generating Schema
const donationSchema = new Schema({
	eventName: { type: String, required: true },
	eventDate: { type: Date, default: Date.now },
	lunchNumber: { type: Number, required: true },
	eventDescription: { type: String, required: true },
	userName: { type: String, required: true },
});

//Setting schema to variable
const Donation = mongoose.model("Donation", donationSchema);

//Exporting
module.exports = Donation;
