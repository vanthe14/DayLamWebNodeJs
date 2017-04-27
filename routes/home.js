var express = require('express');
var router = express.Router();
var database = require('../models/Pages');
var pagination = require('pagination');
var fs = require('fs');

//Get data from database example
var famousPage=database.famousPageHome;
var allPage=database.allPageHome


router.get('/', function(req, res) {
  var currentPage=req.query.page;

  if(typeof currentPage=="undefined"){
    var paginator = pagination.create('search', {prelink:'/home', current: 0,pageLinks:20, rowsPerPage: 12, totalResult: 100});
  }
  else{
     console.log(req.query.page);
    var paginator = pagination.create('search', {prelink:'/home', current: parseInt(currentPage)-1,pageLinks:20, rowsPerPage: 12, totalResult: 100});
  }

  res.render("pages/home",{idMenu:1,famousPage:famousPage,allPage:allPage,paginator:paginator.getPaginationData()});
});

router.post('/about?:page', function(req, res) {
  var pageDisplay=req.query.page;

  try {
    var templateHome = fs.readFileSync('./views/partials/template.ejs', 'utf-8');
     var templateString = fs.readFileSync('./views/pages/'+ pageDisplay, 'utf-8');
     var relatedPageContentNodejs=database.relatedPageContentNodejs
    var objSend={"templateHome":templateHome,"templateString":templateString,"relatedPageContentNodejs":relatedPageContentNodejs}

    res.send(objSend);
  } catch (err) {
    res.send("Trang không tồn tại");
  };
});

// router.post('/', function(req, res) {
//   res.render("pages/home");
// });

module.exports = router;
