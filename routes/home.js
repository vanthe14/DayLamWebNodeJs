var express = require('express');
var router = express.Router();
var pagination = require('./Pagination');

var database = require('../models/Pages');

//Get data from database example

var famousPage=database.famousPageHome;
var allPage=database.allPageHome

var objpagination=pagination.pagination
objpagination=pagination.reloadPagination(objpagination);

router.get('/', function(req, res) {

  objpagination.pageCount=8
  objpagination.state="/"

  res.render("pages/home",{idMenu:1,famousPage:famousPage,allPage:allPage,pagination:objpagination});
  console.log(objpagination.currentPage+"currentPage goi home");
});

router.post('/', function(req, res) {
  res.render("home");
});

module.exports = router;
