
var pagination = require('./Pagination');


module.exports.loadPage = function(req, res, next) {
  //  console.log(req.params.id);
  var id=req.query.id;
  var menuPage=req.query.menu
    res.render("pages/"+menuPage,{idMenu:id,pagination:pagination});
}
