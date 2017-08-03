var path = require('path');

var express = require('express');
var router = express.Router();

var oldContent = require(path.join(__dirname, 'oldContent.json'));
var newContent = require(path.join(__dirname, 'newContent.json'));
var bible = require(path.join(__dirname, 'bible.json'));
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('bible', {
        title: 'Yee',
        old: oldContent,
        new: newContent,
        bible: JSON.stringify(bible)
    });
});

module.exports = router;