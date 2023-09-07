const express = require("express");
const router = express.Router();
const { ensureLoggedIn } = require("connect-ensure-login");
const { async } = require("regenerator-runtime");


router.get("/dash", ensureLoggedIn("/api/loginPage"), async(req, res) => {
  res.render("parking_.pug");
});

router.get("/parkingDash", ensureLoggedIn("/api/loginPage"), (req, res) => {
  req.session.user = req.user;
  const loggedInUser = req.session.user.firstname;
  res.render("parking_.pug");
});

router.get("/batteryDash", ensureLoggedIn("/api/loginPage"), (req, res) => {
  req.session.user = req.user;
  const loggedInUser = req.session.user.firstname;
  res.render("battery_.pug");
});



router.get("/tyreDash",  ensureLoggedIn("/api/loginPage"), (req, res) => {
  req.session.user = req.user;
  const loggedInUser = req.session.user.firstname;
  res.render("tire_.pug");
});

module.exports = router;
