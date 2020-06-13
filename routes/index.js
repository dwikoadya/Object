var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Bola Mania !' });
});

router.get('/esports',(req, res) => {
    res.render('esports')
})
module.exports = router;
