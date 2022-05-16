const res = require("express/lib/response");
const Product = require("../models/Product");
const News = require("../models/News");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class SiteControllers {
  show(req, res, next) {
    Product.find({})
      .then((product) =>
        res.render("home", { product: mutipleMongooseToObject(product) })
      )
      .catch(next);
  }
  show_news(req, res, next) {
    News.find({})
      .limit(6)
      .sort({ _id: -1 })
      .then((new_item) =>
        res.render("home", { news: mutipleMongooseToObject(new_item) })
      )
      .catch(next);
  }
}
module.exports = new SiteControllers();
