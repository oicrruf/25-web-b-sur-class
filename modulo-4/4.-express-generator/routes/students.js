var express = require("express");
var router = express.Router();
var { validator, timeTracker } = require("../middleware/keyValidator");

/* GET users listing. */
router.get("/", timeTracker, validator, (req, res, next) => {
  res.json({ students: [] });
});

router.get("/scores", validator, (req, res, next) => {
  res.json({ scores: [] });
});

module.exports = router;
