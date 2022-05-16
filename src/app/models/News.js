const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const News = new Schema(
  {
    _id: { type: Number },
    name: { type: String, maxlength: 250 },
    category: { type: String, maxlength: 250 },
    image: { type: String },
     
  }
);


module.exports = mongoose.model('infor-news', News);
