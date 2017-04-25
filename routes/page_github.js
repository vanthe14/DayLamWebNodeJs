var express = require('express');
var router = express.Router();
var pagination = require('./Pagination');
var database = require('../models/Pages');

var objpagination=pagination.pagination


router.get('/', function(req, res) {

  objpagination.state="/page_github?id=2"
  objpagination.pageCount=5;
  
  var id=req.query.id;

  res.render("pages/page-github",{idMenu:id,pagination:objpagination});
  console.log(objpagination.currentPage+"currentPage goi github");
});

router.post('/', function(req, res) {
  var id=req.query.id;
  res.render("pages/page-github",{idMenu:id,pagination:objpagination});;
});
module.exports = router;
