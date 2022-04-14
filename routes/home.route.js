const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send(
		"<h1> Hello Madisson Taylor Osmak </h1> <br/> <h2> You smell like logs </h2>"
	);
});

module.exports = router;
