//  ############## Load Modules START  ##############
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const methodOverride = require("method-override");
dotenv.config();
var path = require("path");
//  ############## Load Modules END  ##############

//  ############## Prepare Middleware START  ##############

// --- favicon ---
//app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// --- express body parser ---
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// --- static folder(s) ---
app.use(express.static(path.join(__dirname, "public")));

// --- method override ---
app.use(methodOverride("_method"));

//  ############## Prepare Middleware END  ##############

//  ############## Create Routes START  ##############

// ------ HOME ------
const homeRoute = require("./routes/home.route");

//  ############## Create Routes END  ##############

// ############## Prepare Routes START ##############

// --------- use Routes ---------

// ------ HOME ------
app.use("/", homeRoute);

// ############## Prepare Routes END ##############

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening to port ${port}`));
