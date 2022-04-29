const express = require("express");
const router = express.Router();
const controller = require("../controllers/main.controller");

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

router.post("/email", (req, res) => {
	//TODO: call controller and send email from form data
	controller
		.sendEmail(
			req.body.email,
			req.body.phone,
			req.body.firstname,
			req.body.lastname,
			req.body.subject,
			req.body.message
		)
		.then(() => {
			res.send(true);
		})
		.catch(() => {
			res.send(false);
		});
});

module.exports = router;
