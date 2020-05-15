import axios from "axios";

export default {
	// Gets all items
	allDonations: function () {
		console.log("All Donations HIT");
		return axios.get("/api/donations/");
	},
	// Gets the item with the given id
	getDonations: function (id) {
		return axios.get("/api/donations/" + id);
	},
	updateDonations: function (id, donations) {
		return axios.put("/api/donations/" + id, donations);
	},
	// Deletes the item with the given id
	deleteDonations: function (id) {
		return axios.delete("/api/donations/" + id);
	},
	// Saves an item to the database
	saveDonations: function (donations) {
		console.log("Post Donations HIT");
		return axios.post("/api/donations/", donations);
	},
};
