const Product = require("../models/Product");
const moment = require("moment");
const { mutipleMongooseToObject } = require("../../util/mongoose");
const express = require("express");
class CategoryControllers {
  show(req, res, next) {
    Product.find({})
      .sort({ _id: -1 })
      .then((product) =>
        res.render("products", { product: mutipleMongooseToObject(product) })
      )
      .catch(next);
  }

  panigation(req, res, next) {
    const perPage = 5; // số lượng sản phẩm xuất hiện trên 1 page // số lượng sản phẩm xuất hiện trên 1 page
    let page = req.params.page || 1;
    console.log(req);
    Product.find() // find tất cả các data
      .skip(perPage * page - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
      .limit(perPage)
      .lean()
      .exec((err, products) => {
        Product.countDocuments().exec((err, count) => {
          // đếm để tính có bao nhiêu trang
          if (err) return next(err);
          res.render("products", {
            products, // sản phẩm trên một page
            current: page, // page hiện tại
            pages: Math.ceil(count / perPage), // tổng số các page
            pagination: {
              page: req.params.page || 1,
              pageCount: Math.ceil(count / perPage),
            },
          });
          // res.json(products)
        });
      });
  }
  store(req, res, next) {
    console.log(req.body);
    const {
      note,
      pack,
      _id,
      name,
      medicine,
      unit,
      product_id,
      weight,
      retail_price,
      import_price,
      wholesale_price,
      brand,
      quantity,
    } = req.body;
    const date = new Date();
    const createAt = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    const json = {
      _id: _id,
      name: name,
      brand: brand,
      image: req.file
        ? `http://localhost:3000/img/product/${req.file.originalname}`
        : "",
      createAt: createAt,
      price: {
        type: Object,
        retail_price: retail_price,
        import_price: import_price,
        wholesale_price: wholesale_price,
      },
      detail: {
        product_id: product_id,
        pack: pack,
        quantity: quantity,
        medicine: medicine,
        note: note,
      },
    };
    const product = new Product(json);
    product
      .save()
      .then(() => res.redirect("/products/page=4"))
      .catch(next);
  }
  product_create(req, res, next) {
    res.render("product/product_create");
  }
  trashProduct(req,res,next){
    res.render("product/trash_product");
  }
  delete(req, res, next) {
    Product.delete({ _id: req.params.id }).then(() =>
      res.redirect("back").catch(next)
    );
  }
}
module.exports = new CategoryControllers();
