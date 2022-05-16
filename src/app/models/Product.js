const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require("mongoose-sequence")(mongoose);
var mongooseDelete = require('mongoose-delete');
const Products = new Schema(
  {
    _id: { type: Number},
    name: { type: String, maxlength: 250 ,require: true },
    image: { type: String },
    createAt : {type:String} ,
    brand :{type : String} ,
    price: {
      type: Object, 
      retail_price: { type: Number, maxlength: 20 },
      import_price: {type:Number , maxlength: 20} ,  
      wholesale_price:{type:Number, maxlength: 20} ,
    },
    detail: {
      type: Object,
      product_id : {type: String} ,
      pack : {type: Number} ,
      quantity: {type: Number } ,
      medicine: { type: String, maxlength: 250 },
      note: { type: String, maxlength: 250 },
    },
  },
  {
    _id: false,
  },
  {
    timestamps: true,
  }
);
// plugin 
Products.plugin(AutoIncrement);
Products.plugin(mongooseDelete, { overrideMethods: "all", deletedAt: true });
module.exports = mongoose.model("Products", Products);
