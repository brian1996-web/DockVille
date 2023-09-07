const express = require('express');
const router = express.Router();


router.get('/landing', (req, res) => {
  res.render('landing.pug');
});

router.get("/howitworks",(req, res) => {
  res.render("howitworks.pug");
});

// router.post("/reghowitworks", async (req, res) => {
//   try {
//     const howitworks = new howitworks(req.body);
//     await howitworks.save();
//     res.redirect("/api/howitworks");
//     console.log(req.body);
//   } catch (error) {
//     res.status(400).render("howitworks");
//     console.log(error);
//   }
// });


module.exports = router;