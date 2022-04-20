const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	//TODO: res.render homepage
	res.render("home", { title: "Home" });
});

router.get("/about", (req, res) => {
	//TODO: res.render about
	res.render("about", { title: "About" });
});

router.get("/services", (req, res) => {
	//TODO: res.render services
	res.render("services", { title: "Services" });
});

router.get("/contact", (req, res) => {
	//TODO: res.render contact
	res.render("contact", { title: "Contact Us" });
});

module.exports = router;
