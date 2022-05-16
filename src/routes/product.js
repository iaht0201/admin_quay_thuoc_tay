var express = require('express');
var router = express.Router();
var productCOntrollers = require('../app/controllers/ProductControlle');
const upload = require('../middleware/MulterFile')
router.delete('/:id' ,productCOntrollers.delete)
router.get('/trash', productCOntrollers.trashProduct);
router.get('/create' , productCOntrollers.product_create);
// router.get('/create', productCOntrollers.product_create)
router.get('/page=:page', productCOntrollers.panigation);
router.post('/' , upload.single("image") ,  productCOntrollers.store );
// router.post('/', productCOntrollers.store );

module.exports = router;
