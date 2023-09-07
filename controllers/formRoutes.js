const express = require('express');

const Form = require("../models/formModel");

const router = express.Router();


//sign up route
router.get('/form', (req, res) => {
  res.render('form.pug');
});


router.post('/regform', async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.redirect("/api/form");
    console.log(req.body);
  }
     catch (error) {
    res.status(400).render("form");
    console.log(error);
  }

});



module.exports = router;