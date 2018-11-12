// set up a temporary (in memory) database
const Datastore = require('nedb')
const LOG = require('../utils/logger.js')
const products = require('../data/products.json')

module.exports = (app) => {
  LOG.info('START seeder.')
  const db = {}

  db.products = new Datastore()
  db.products.loadDatabase()

  // insert the sample data into our data store
  db.products.insert(products)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.products = db.products.find(products)
  LOG.debug(`${app.locals.products.query.length} products seeded`)
  
  LOG.info('END Seeder. Sample data read and verified.')
}
