var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({students: []});
});

router.get('/scores', function(req, res, next) {
  res.json({scores: []});
});

module.exports = router;
