var multer = require('multer');
var storage = multer.diskStorage({
  destination : (req , file , res)=>{
      res(null , 'src/public/img/product')
  },
  filename : (req , file , res)=>{
      res(null , file.originalname )
  }})
var upload = multer({storage: storage})
 //save trên local của server khi dùng multer

module.exports = upload;