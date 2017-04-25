var pagination = require('./Pagination');

module.exports.blog_single = function(req, res, next) {
      res.render("blog-single");
}
module.exports.blog_style1 = function(req, res, next) {
      res.render("pages/blog-style1",{idMenu:6,pagination:pagination});
}
module.exports.blog_style2 = function(req, res, next) {
      res.render("blog-style2");
}
module.exports.blog_style3 = function(req, res, next) {
      res.render("blog-style3");
}
module.exports.blog_style4 = function(req, res, next) {
      res.render("blog-style4");
}
