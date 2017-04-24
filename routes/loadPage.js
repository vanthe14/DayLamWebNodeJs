var pageId="page-contact"

module.exports.loadPage = function(req, res, next) {
  //  console.log(req.params.id);
    res.render("pages/"+pageId,{idMenu:7});
}
