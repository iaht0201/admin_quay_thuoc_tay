
const mongoose = require('mongoose');
async function connect(res, req) {
  try {
    await mongoose.connect('mongodb://localhost:27017/quan_ly_thuoc_tay');
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
module.exports = { connect };
