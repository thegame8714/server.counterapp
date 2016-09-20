var express = require('express');
var router = express.Router();

  router.use(function(req, res, next) {
    console.log('Something is happening');
    next();
  });

module.exports = router;
