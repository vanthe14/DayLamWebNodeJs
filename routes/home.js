var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    res.render("pages/home");
});

router.post('/', function(req, res) {
    res.render("home");
});

module.exports = router;
