const express = require('express');

const Signup = require("../models/signupModel");

const router = express.Router();

//sign up route
router.get('/signup', (req, res) => {
  res.render('signup.pug');
});

router.post('/regsignup', async (req, res) => {
  try {
    const signup = new Signup(req.body);
    await signup.save();
    res.redirect("/api/signup");
    console.log(req.body);
  }
     catch (error) {
    res.status(400).render("signup");
    console.log(error);
  }

});

router.get("/signuplist", async (req, res) => {
  try {
    let items = await Signup.find();
    let ages = await Signup.aggregate([
      {"$group": {_id: "$all",
      totalAge: {$sum: "$age"},
    }}
   
  ]);
let genderCount = await Signup.aggregate([ 
  {$match:{
  gender: 'male'
}}
]).count
    
res.render("signuplist.pug", { signups: items,signupAges: ages[0].totalAge, genderCount:ages[0].gender});
     //let ages =group{totalAge{sum}}
    // res.render("employeelist.pug", { employees: items, empAges: ages[0].totalAge, genderCount:ages[0].gender});
    // res.render("employeelist.pug", { employees: items, empAges: ages[0].totalAge});
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Sorry could not get signups" });
  }
});



router.post("/signup/delete", async (req, res) => {
  try {
    await Signup.deleteOne({ _id: req.body.id });
    res.redirect("/back");
  } catch (error) {
    res.status(400).send("Unable to delete item from the database");
  }
});//    how to update data
router.get("/signup/edit/:id", async (req, res) => {
  try {
    const sign = await Signup.findOne({
      _id: req.params.id,
    });
    res.render("editsignup", {signup: sign});
  } catch (error) {
    res.status(400).send("Couldn't find clients in database");
    console.log(error);
  }
});
//edit in the database
router.post("/signup/edit", async (req, res) => {
  try{
    await Signup.findOneAndUpdate({_id: req.query.id},req.body);
    res.redirect("/api/signuplist")
  }
  catch(error){
    res.status(400).send("Could not find clients data");
    console.log(error);
  }
});














module.exports = router;