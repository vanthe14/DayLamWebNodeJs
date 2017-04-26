var express = require('express');
var router = express.Router();
var pagination_href = require('./Pagination');

var database = require('../models/Pages');

//Get data from database example
var famousPage=database.famousPageHome;
var allPage=database.allPageHome
var pagination = require('pagination');
//var objpagination=pagination.pagination

router.get('/', function(req, res) {
  var currentPage=req.query.page;
  if(typeof currentPage=="undefined"){
    var paginator = pagination.create('search', {prelink:'/home', current: 0, rowsPerPage: 200, totalResult: 10020});
  }
  else{
     console.log(req.query.page);
    var paginator = pagination.create('search', {prelink:'/home', current: parseInt(currentPage)-1, rowsPerPage: 200, totalResult: 10020});
  }

//  objpagination.pageCount=8
//  objpagination.state="/"

//  console.log(objpagination.currentPage+"currentPage goi home");


//   paginator.render();

  res.render("pages/home",{idMenu:1,famousPage:famousPage,allPage:allPage,paginator:paginator.getPaginationData()});
});

// router.get('/:page', function(req, res) {
//   var paginator = pagination.create('search', {prelink:'/', current: 1, rowsPerPage: 200, totalResult: 10020});
// //  objpagination.pageCount=8
// //  objpagination.state="/"
//
// //  console.log(objpagination.currentPage+"currentPage goi home");
//
//
// //   paginator.render();
//    //console.log(paginator.render());
//   res.render("pages/home",{idMenu:1,famousPage:famousPage,allPage:allPage,paginator:paginator.getPaginationData()});
// });

router.post('/', function(req, res) {
  res.render("home");
});

module.exports = router;
