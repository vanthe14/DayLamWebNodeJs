var express    = require("express");
var router = express.Router();
var pagination = require('pagination');

var pagination = {
  state : null,
  previousPage: 1,
  currentPage : 1,
  nextPage: 2,
  pageCount: 1
}

module.exports.pagination=pagination;
module.exports.loadPagination = function(req, res, next) {

  //req.params.id when use/p/:param1
   var currentPage=req.query.page;
   console.log("cai lui"+currentPage)
  // pagination.currentPage=currentPage;
  // if(parseInt(currentPage)>1){
  //   pagination.previousPage=parseInt(currentPage)-1;
  // }
  // if(parseInt(currentPage)==1||parseInt(currentPage)<pagination.pageCount){
  //   pagination.nextPage=parseInt(currentPage)+1;
  // }
     res.redirect("/");
  //  res.render("pages/home");
}
