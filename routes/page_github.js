var express = require('express');
var router = express.Router();
//var pagination = require('./Pagination');
var database = require('../models/Pages');

//var objpagination=pagination.pagination

var pagination = require('pagination');
//var objpagination=pagination.pagination

router.get('/', function(req, res) {
  // var currentPage=req.query.page;
  // if(typeof currentPage=="undefined"){
  //   var paginator = pagination.create('search', {prelink:'/page_github', current: 0, rowsPerPage: 200, totalResult: 10020});
  // }
  // else{
  //    console.log(req.query.page);
  //   var paginator = pagination.create('search', {prelink:'/page_github', current: parseInt(currentPage)-1, rowsPerPage: 200, totalResult: 10020});
  // }
  //
  // res.render("pages/page-github",{idMenu:id,paginator:paginator.getPaginationData()});
  console.log("currentPage goi github");
});

router.post('/', function(req, res) {
  var id=req.query.id;
  res.render("pages/page-github",{idMenu:id,pagination:objpagination});;
});
module.exports = router;
