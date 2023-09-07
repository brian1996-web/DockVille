const express = require("express");

const Tire = require("../models/tireModel");

const passport = require("passport");

const router = express.Router();

const ensureloggedIn = require("connect-ensure-login");

// const userModel = require('../models/userModel');

// when auser access the signup ('/signup', acallback function(req,res) replies
// back by giving user.pug)

// router.get('/landingpage', (req, res) => {
//   res.render('landingPage.pug');
// });

router.get("/tireform", (req, res) => {
  res.render("tire.pug");
});

// router.get("/tireform", (req, res) => {
//   req.session.user = req.user;
//   if (
//     req.session.user.model === "passenger" ||
//     req.session.user.model === "trucktire"
//   ) {
//     res.render("tire.pug");
//   } else {
//     res.render("landing.pug", { alert: "Access is denied" });
//   }
// });

router.post("/regtire", async (req, res) => {
  try {
    const tire = new Tire(req.body);
    console.log(req.body);
    await tire.save(req.body.password);
    res.redirect("/api/tireform");
  } catch (error) {
    res.status(400).send({ message: "failed to register user" });

    console.log(error);
  }
});

router.get("/lists", async (req, res) => {
  try {
    let items = await Tire.find();
    let ages = await Tire.aggregate(
      [
      { $group: { _id: "$all", totalAge: { $sum: "$age" } } },
    ]
    ).count;

    res.render("tirelist.pug", {tires: items});
    // res.render("trucklist.pug", {trucks:items});
    // res.render("trucklist.pug", { trucks: items, empAges: ages[0].totalAge});
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "Sorry could not get truck Numbers" });
  }
});
//    how to update data
router.get("/tire/edit/:id", async (req, res) => {
  try {
    const tir = await Tire.findOne({
      _id: req.params.id,
    });
    res.render("edittire", { tire: tir });
  } catch (error) {
    res.status(400).send("Couldn't find it in the  database");
    console.log(error);
  }
});

router.get("/tire/delete/:id", async (req, res) => {
  try {
    res.render("edittire");
  } catch (error) {
    res.status(400).send("Couldn't find it in the  database");
    console.log(error);
  }
});
// //deleting
router.post("/tire/delete", async (req, res) => {
  try {
    await Tire.deleteOne({ _id: req.body.id });
    res.redirect("/back");
  } catch (error) {
    res.status(400).send("Unable to delete item from the database");
  }
});

//route for newly eduted data
// router.post("/employee/edit" , ensureloggedIn("/api/login"), async (req, res) => {
router.post("/tire/edit", async (req, res) => {
  try {
    await Tire.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/api/list");
  } catch (error) {
    res.status(400).send("Could not find tire data");
    console.log(error);
  }
});

// login routes
// router.get("/login", (req, res) => {
// res.render("login.pug")
// })

// router.post("/login", passport.authenticate("local",
// { failureRedirect: "/api/login"}),
// (req, res) => {
//   req.session.user = req.user
//   let loggedinUser = req.session.user.firstname;
//   console.log(loggedinUser);
//   // res.render("dashboard");
//   // res.redirect("/api/dashboard")
//   console.log(req.body);
//   console.log(req.session.user.role);

//   if(req.session.user.role === "parking") {
//     res.render("parking_.pug");
//   }
//  else if(req.session.user.role === "tire") {
//     res.render("tire_.pug",{inUser:loggedinUser});
//   }
//   else if(req.session.user.role === "battery") {
//     res.render("battery_.pug");
//   }
//   else{
//     res.send("could not route user")
//   }
// }
// );
// // for logging out
// router.get("/logout", (req, res) => {
//   req.session.destroy(()=>{res.redirect("/api/login")});
//   console.log("you have been loged out")
// })

module.exports = router;
