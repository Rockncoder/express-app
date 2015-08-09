var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MEAN Corp' });
});

router.get('/about', function(req, res, next){
  res.render('index', { title: 'About' });
});

router.get('/contacts', function(req, res, next){
  res.render('index', { title: 'Contacts' });
});

router.get('/add-contact', function(req, res, next){
  res.render('index', { title: 'Add Contact' });
});
module.exports = router;
