/**
 * Manages routing for different website pages.
 * This will manage all the different controllers.
 * @Author(s): Daiwei Chen
 * @Version: 2018-11-14
 */

const express = require('express');
const LOG = require('../utils/logger.js');

LOG.debug('Routing all requests...')

const router = express.Router();

// ----------- Top-Level requests -----------------

// 3 log requests to stdout and also
// log HTTP requests to a file using the standard Apache combined format
//var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
//app.use(logger('dev'));
//app.use(logger('combined', { stream: accessLogStream }));

router.get("/", function (req, res) {
  //res.sendFile(path.join(__dirname + '/assets/index.html'))
  res.render("index.ejs")
 })

//  router.get("/404", function (req, res) {
//   res.render("404.ejs")
//  })
 router.get(function (req, res) {
  res.render('404')
})

// ------------------------------------------------

// ------------- Controller pathing ---------------

router.use('/customers', require('../controllers/customers.js')); //Was customers
router.use('/product', require('../controllers/product.js'))
router.use('/order', require('../controllers/order.js'))
router.use('/orderLine', require('../controllers/orderLine.js'))
router.use('/contactus', require('../controllers/contactus.js'))
router.use('/about', require('../controllers/about.js'))
// ------------------------------------------------

LOG.debug('Routing end.');
module.exports = router