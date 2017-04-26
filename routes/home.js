var express = require('express');
var router = express.Router();
//var pagination = require('./Pagination');

var database = require('../models/Pages');

//Get data from database example
var famousPage=database.famousPageHome;
var allPage=database.allPageHome
var pagination = require('pagination');
//var objpagination=pagination.pagination
var paginator = pagination.create('search', {prelink:'/', current: 3, rowsPerPage: 200, totalResult: 10020});
router.get('/', function(req, res) {
//  objpagination.pageCount=8
//  objpagination.state="/"

//  console.log(objpagination.currentPage+"currentPage goi home");


//   paginator.render();
   //console.log(paginator.render());
  res.render("pages/home",{idMenu:1,famousPage:famousPage,allPage:allPage,paginator:paginator.getPaginationData()});
});

router.post('/', function(req, res) {
  res.render("home");
});

module.exports = router;
