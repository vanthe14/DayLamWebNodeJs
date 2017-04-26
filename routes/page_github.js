var express = require('express');
var router = express.Router();
//var pagination = require('./Pagination');
var database = require('../models/Pages');

//var objpagination=pagination.pagination

var pagination = require('pagination');
//var objpagination=pagination.pagination
var paginator = pagination.create('search', {prelink:'/', current: 2, rowsPerPage: 200, totalResult: 10020});
router.get('/', function(req, res) {

  //objpagination.state="/page_github?id=2"
  //objpagination.pageCount=5;

  var id=req.query.id;

  res.render("pages/page-github",{idMenu:id,paginator:paginator.getPaginationData()});
  console.log(objpagination.currentPage+"currentPage goi github");
});

router.post('/', function(req, res) {
  var id=req.query.id;
  res.render("pages/page-github",{idMenu:id,pagination:objpagination});;
});
module.exports = router;
