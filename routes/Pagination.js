var express    = require("express");
var home    = require('./home');

var router = express.Router();

var pagination = {
  state : null,
  previousPage: 1,
  currentPage : 1,
  nextPage: 1,
  pageCount: 1,

}
module.exports.pagination=pagination;
module.exports.loadPagination = function(req, res, next) {
  //req.params.id when use/p/:param1
  var currentPage=req.query.pagination;
  pagination.currentPage=currentPage;
  if(parseInt(currentPage)>1){
    pagination.previousPage=parseInt(currentPage)-1;
  }
  if(parseInt(currentPage)==1||parseInt(currentPage)<pagination.pageCount){
    pagination.nextPage=parseInt(currentPage)+1;
  }

    console.log(currentPage);
    console.log(pagination.nextPage);
    if(pagination.state=='Home'){
      //router.route('/home');
    //  return router;
    //  res.send(home.get);
    res.redirect('/');
      //console.log(pagination.state+"cái ùi");
    }else{
      res.render("pages/"+pageId,{idMenu:7,pagination:pagination});;
    }
  //  res.render("pages/home");
}
