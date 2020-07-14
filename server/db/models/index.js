const User = require('./user')
const OrderProduct = require('./order_product')
const Orders = require('./orders')
const ProductPhotos = require('./product_photos')
const Products = require('./products')

const Addresses = require('./addresses')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.belongsTo(Addresses)
User.belongsTo(Orders)
Orders.belongsTo(OrderProduct)
Products.belongsTo(OrderProduct)
Products.belongsTo(ProductPhotos)

module.exports = {
  User,
  OrderProduct,
  Orders,
  ProductPhotos,
  Products
}
