const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // middleware that parses data
const cors = require("cors"); // middleware to access the routes
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const Users = require("./routes/Users");

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Add routes, both API and view
// const donationsRouter = ("./controllers/donationsController")
// app.use(donationsRouter);

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Credentials", true);
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
	);
	next();
});

app.use("/users", Users);
app.use(routes);

// Connect to the Mongo DB
mongoose
	.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/donations", {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => console.log("MongoDB Connected"))
	.catch((err) => console.log(err));

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
