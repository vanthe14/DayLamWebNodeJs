
var pagination = require('./Pagination');


module.exports.loadPage = function(req, res, next) {
  //  console.log(req.params.id);
  
  var menuPage=req.query.menu
  if(menuPage=='page-github'){
    pagination.pagination.state="Github"
    pagination.pagination.pageCount=3
    pagination.pagination.pageID=id;
    var pagination1=pagination.pagination
    console.log(pagination1);
    res.render("pages/"+menuPage,{idMenu:id,pagination:pagination1});
  }
res.render("pages/"+menuPage,{idMenu:id,pagination:pagination});
}
