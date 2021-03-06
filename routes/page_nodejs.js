var database = require('../models/Pages');
var pagination = require('pagination');
var fs = require('fs');

module.exports.page_nodejs= function(req, res) {
  var displayPages=database.page_nodejs;
  var relatedPageNodejs=database.relatedPageNodejs
  var currentPage=req.query.page;

  if(typeof currentPage=="undefined"){
    var paginator = pagination.create('search', {prelink:'/page_nodejs', current: 0,pageLinks:20, rowsPerPage: 7, totalResult: displayPages.length});
  }
  else{
    var paginator = pagination.create('search', {prelink:'/page_nodejs', current: parseInt(currentPage)-1,pageLinks:20, rowsPerPage: 7, totalResult: displayPages.length});
  }

   res.render("pages/page-nodejs",{idMenu:2,allPage:displayPages,relatedPage:relatedPageNodejs,paginator:paginator.getPaginationData()});
};

module.exports.detail= function(req, res) {
  var pageDisplay=req.query.page;
  
  try {
    var templateString = fs.readFileSync('views/pages/'+ pageDisplay, 'utf-8');
    var relatedPageContentNodejs=database.relatedPageContentNodejs
    var objSend={"templateString":templateString,"relatedPageContentNodejs":relatedPageContentNodejs}

    res.send(objSend);
  } catch (err) {
    res.send("Trang không tồn tại");
  };
}
