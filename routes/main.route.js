const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	//TODO: res.render homepage
	res.render("home", { title: "Home" });
});

router.get("/about", (req, res) => {
	//TODO: res.render about

	res.send("<h1> About Section </h1>");
});

router.get("/gallery", (req, res) => {
	//TODO: res.render gallery

	res.send("<h1> Gallery </h1>");
});

router.get("/contact", (req, res) => {
	//TODO: res.render contact

	res.send("<h1> Contact </h1>");
});

module.exports = router;
