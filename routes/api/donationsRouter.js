//  Dependencies
// const router = require("express").Router();
const router = require("express").Router();
const donationsController = require("../../controllers/index");

router
	.route("/")
	.get(donationsController.donations.findAll)
	.post(donationsController.donations.create);

router
	.route("/:id")
	.get(donationsController.donations.findById)
	.put(donationsController.donations.update)
	.delete(donationsController.donations.remove);

// Exporting
module.exports = router;
