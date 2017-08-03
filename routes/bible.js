var path = require('path');

var express = require('express');
var router = express.Router();

var oldTestament = [], newTestament = [];
content = require(path.join(__dirname, 'content.json'));
for (var i = 0, flag = false; i < content["en"].length; i++) {
    if (flag || content["en"][i] == "Matthew") {
        flag = true;
        newTestament.push(content["en"][i]);
    }
    else{
        oldTestament.push(content["en"][i]);
    }
}
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('bible', {
        title: 'Yee',
        old: oldTestament,
        new: newTestament
    });
});

module.exports = router;