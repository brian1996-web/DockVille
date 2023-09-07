const express = require('express');
const router = express.Router();


//hello route
router.get('/sections', (req, res) => {
  res.render('sections.pug');
});

// landing page route
router.get('/landing', (req, res) => {
  res.render('landing.pug');
});

module.exports = router;