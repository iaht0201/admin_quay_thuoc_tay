const res = require('express/lib/response');
const Product = require('../models/Product');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class AdminControllers {
  show(req, res, next) {
    res.render('layouts/admin');
  }
}
module.exports = new AdminControllers();
