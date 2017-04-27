var database = require('../models/Pages');
var pagination = require('pagination');
var fs = require('fs');
var Promise = require('bluebird');
var ejs = Promise.promisifyAll(require('ejs'));


module.exports.page_nodejs= function(req, res) {
  var displayPages=database.page_nodejs;
  var currentPage=req.query.page;

  if(typeof currentPage=="undefined"){
    var paginator = pagination.create('search', {prelink:'/page_nodejs', current: 0,pageLinks:20, rowsPerPage: 7, totalResult: displayPages.length});
  }
  else{
    var paginator = pagination.create('search', {prelink:'/page_nodejs', current: parseInt(currentPage)-1,pageLinks:20, rowsPerPage: 7, totalResult: displayPages.length});
  }

   res.render("pages/page-nodejs",{idMenu:2,allPage:displayPages,paginator:paginator.getPaginationData()});
};

module.exports.detail= function(req, res) {
  var pageDisplay=req.query.page;
  try {
    var templateString = fs.readFileSync('views/pages/'+ pageDisplay +'.ejs', 'utf-8');
    res.send(templateString);
  } catch (err) {
    res.send("Trang không tồn tại");
  };
}
