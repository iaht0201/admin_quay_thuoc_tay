var express = require('express');
var router = express.Router();
var siteCOntrollers = require('../app/controllers/SiteController');

router.get('/' ,siteCOntrollers.show_news);

module.exports = router;
