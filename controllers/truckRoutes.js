const express = require("express");

const Truck = require("../models/truckModel");

const passport = require("passport");

const router = express.Router();

const ensureloggedIn = require("connect-ensure-login");

// const userModel = require('../models/userModel');

// when auser access the signup ('/signup', acallback function(req,res) replies
// back by giving user.pug)

// router.get('/landingpage', (req, res) => {
//   res.render('landingPage.pug');
// });

router.get("/truckform", (req, res) => {
  res.render("details.pug");
});

// router.get("/truckform", (req, res) => {
//   req.session.user = req.user;
//   if (
//     req.session.user.section === "parking" ||
//     req.session.user.section === "tire"
//   )
//   {
//     res.render("details.pug");
//   } else {
//     res.render("landing.pug", { alert: "Access is denied" });
//   }
// });

router.post("/regtruck", async (req, res) => {
  try {
    const truck = new Truck(req.body);
    console.log(req.body);
    await truck.save(req.body.password);
    res.redirect("/api/truckform");
  } catch (error) {
    res.status(400).send({ message: "failed to register user" });

    console.log(error);
  }
});

router.post("/truck/search", async (req, res) => {
  try {
    const searchTerm = req.body.search.toLowerCase();
    const item = await Truck.find({
      $or: [
        { username: { $regex: searchTerm, $options: "i" } },
        { nin: { $regex: searchTerm, $options: "i" } },
        { phone: { $regex: searchTerm, $options: "i" } },
        { Nplate: { $regex: searchTerm, $options: "i" } },
        { model: { $regex: searchTerm, $options: "i" } },
        { gender: { $regex: searchTerm, $options: "i" } },
        { revenue: { $regex: searchTerm, $options: "i" } },
      ],
    });

    res.render("trucklist.pug", { trucks: item });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Could not perform search" });
  }
});

router.get("/list", async (req, res) => {
  try {
    let items = await Truck.find();
    let ages = await Truck.aggregate([
      { $group: { _id: "$all", totalAge: { $sum: "$age" } } },
    ]).count;

    res.render("trucklist.pug", { trucks: items });
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
router.get("/truck/edit/:id", async (req, res) => {
  try {
    const trk = await Truck.findOne({
      _id: req.params.id,
    });
    res.render("edittruck", { truck: trk });
  } catch (error) {
    res.status(400).send("Couldn't find it in the  database");
    console.log(error);
  }
});

router.get("/truck/delete/:id", async (req, res) => {
  try {
    res.render("edittruck");
  } catch (error) {
    res.status(400).send("Couldn't find it in the  database");
    console.log(error);
  }
});
// //deleting
router.post("/truck/delete", async (req, res) => {
  try {
    await Truck.deleteOne({ _id: req.body.id });
    res.redirect("/back");
  } catch (error) {
    res.status(400).send("Unable to delete item from the database");
  }
});

//route for newly eduted data
// router.post("/employee/edit" , ensureloggedIn("/api/login"), async (req, res) => {
router.post("/truck/edit", async (req, res) => {
  try {
    await Truck.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/api/list");
  } catch (error) {
    res.status(400).send("Could not find truck data");
    console.log(error);
  }
});

router.get("/truck/receipt/:id", async (req, res) => {
  try {
    const trk = await Truck.findOne({
      _id: req.params.id,
    });
    res.render("receipt.pug", { truck: trk });
  } catch (error) {
    res.status(400).send("Couldn't find it in the  database");
    console.log(error);
  }
});

module.exports = router;
