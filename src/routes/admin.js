var express = require('express');
var router = express.Router();
var adminCOntrollers = require('../app/controllers/AdminController');

router.get('/', adminCOntrollers.show);

module.exports = router;
