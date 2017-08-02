var path = require('path');

var express = require('express');
var router = express.Router();

var weekly = require(path.join(__dirname, 'weekly.json'));
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Yee',
        weekly: weekly
    });
});

module.exports = router;