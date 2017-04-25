var express    = require("express");
var path = require('path');
var http = require('http');
var engine = require('ejs-locals');

//declare router
var home    = require('./routes/home');
var loadPage    = require('./routes/loadPage');
var pagination = require('./routes/Pagination');
var blogs = require('./routes/blogs');
var page_github = require('./routes/page_github');
var app = express();

//use router
app.use('/',  home);
app.get('/loadPage?:id', loadPage.loadPage);
app.get('/pagination?:id', pagination.loadPagination);
app.get('/blog_style1', blogs.blog_style1);
app.use('/page_github?:id',page_github)
// some environment variables
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


//home page
// app.get("/",function(req,res){
//   res.render("home");
// });

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
