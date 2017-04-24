var express = require('express');
var router = express.Router();
var pagination = require('./Pagination');

var famousPage = {
  image:['img/gallery/slider-img-1.jpg',
         'img/gallery/slider-img-2.jpg',
         'img/gallery/slider-img-3.jpg',
         'img/gallery/slider-img-4.jpg'
       ],
  title: 'Welcome to NodeJS.',
  contentLead:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium vulputate magna sit amet blandit.',
  content:'Cras rutrum, massa non blandit convallis, est lacus gravida enim, eu fermentum ligula orci et tortor. In sit amet nisl ac leo pulvinar molestie. Morbi blandit ultricies ultrices.',
  refReadmore:'/'
};

var allPage = [{
  data_id: 'id-1',
  hrefImageFull:'gallery-img-1-full.jpg',
  hrefPage:'#',
  hrefImageCol:'gallery-img-1-4col.jpg'
},
{
  data_id: 'id-2',
  hrefImageFull:'gallery-img-1-full.jpg',
  hrefPage:'#',
  hrefImageCol:'gallery-img-1-4col.jpg'
},
{
  data_id: 'id-3',
  hrefImageFull:'gallery-img-1-full.jpg',
  hrefPage:'#',
  hrefImageCol:'gallery-img-1-4col.jpg'
},
{
  data_id: 'id-4',
  hrefImageFull:'gallery-img-1-full.jpg',
  hrefPage:'#',
  hrefImageCol:'gallery-img-1-4col.jpg'
},
{
  data_id: 'id-5',
  hrefImageFull:'gallery-img-1-full.jpg',
  hrefPage:'#',
  hrefImageCol:'gallery-img-1-4col.jpg'
}
];

pagination.pagination.state="Home"
var pagination=pagination.pagination

router.get('/', function(req, res) {
    res.render("pages/home",{idMenu:1,famousPage:famousPage,allPage:allPage,pagination:pagination});
});

router.post('/', function(req, res) {
    res.render("home");
});

module.exports = router;
