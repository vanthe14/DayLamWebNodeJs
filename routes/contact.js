var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render("pages/page-contact",{idMenu:7});
});

router.post('/', function(req, res) {
  res.render("pages/page-contact",{idMenu:7});
});

module.exports = router;
