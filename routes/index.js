var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Meine erste express Seite' });
  res.redirect('/catalog/catalog' );
});

module.exports = router;
