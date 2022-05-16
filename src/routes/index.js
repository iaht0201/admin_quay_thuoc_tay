const siterouter = require('./site');
const productrouter = require('./product');
const adminrouter = require('./admin');
const router = (app ) => {
  app.use('/admin', adminrouter);
  app.use('/products', productrouter);
  app.use('/', siterouter);
};
module.exports = router;
