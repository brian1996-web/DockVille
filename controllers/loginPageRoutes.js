const express = require("express");
const Login = require("../models/loginPageModel")
const passport = require('passport');
const router = express.Router();

router.get("/loginPage",(req, res) => {
  res.render("loginPage.pug");
});

router.post("/regloginPage", async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.save();
    res.redirect("/api/loginPage");
    console.log(req.body);
  } catch (error) {
    res.status(400).render("loginPage");
    console.log(error);
  }
});




module.exports = router;



