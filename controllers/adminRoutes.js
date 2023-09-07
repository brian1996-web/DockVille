const express = require("express");
const Admin = require("../models/adminModel");
const passport = require("passport");
const router = express.Router();

// const userModel = require('../models/userModel');

// when auser access the signup ('/signup', acallback function(req,res) replies
// back by giving user.pug)
router.get("/admin", (req, res) => {
  res.render("admin.pug");
});

router.post("/register", async (req, res) => {
  try {
    const admin = new Admin(req.body);
    console.log(req.body);
    await Admin.register(admin, req.body.password);
    res.redirect("/api/admin");
  } catch (error) {
    res.status(400).send({ message: "failed to register user" });

    console.log(error);
  }
});

// login routes
router.get("/loginPage", (req, res) => {
  res.render("loginPage.pug");
});
router.post(
  "/loginPage",
  passport.authenticate("local", 
  { failureRedirect: "/api/loginPage" }),
  (req, res) => {
    req.session.user = req.user;
    let loggedInUser = req.session.user.firstname;
    console.log(loggedInUser);
    if (req.session.user.section === "parking") {
      res.redirect("/api/dash");
    }
    if (req.session.user.section === "battery") {
      res.redirect("/api/batteryDash");
    }
    if (req.session.user.section === "tire") {
      res.redirect("/api/tyreDash");
    }
  }
);

// for logging out
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/api/login");
  });
  console.log("you have been loged out");
});

module.exports = router;
