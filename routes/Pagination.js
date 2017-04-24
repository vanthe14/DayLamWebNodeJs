
var pagination = {
  state : null,
  previousPage: 1,
  currentPage : 1,
  nextPage: 2,
  pageCount: 5,

}
module.exports.pagination=pagination;
module.exports.loadPagination = function(req, res, next) {
  var currentPage=req.params.pagination;
    console.log(req.params.pagination);
    //if()
    //res.render("pages/"+pageId,{idMenu:7});
}
