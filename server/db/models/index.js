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

User.hasOne(Addresses)
User.hasMany(Orders)
Addresses.belongsTo(User)

Orders.belongsTo(User)

Orders.hasMany(OrderProduct)
// OrderProduct.belongsTo(Orders)

OrderProduct.belongsTo(Products)
OrderProduct.belongsTo(User)
User.hasMany(OrderProduct)

Products.hasMany(OrderProduct)
Products.hasMany(ProductPhotos)
ProductPhotos.belongsTo(Products)

module.exports = {
  User,
  OrderProduct,
  Orders,
  ProductPhotos,
  Products,
  Addresses
}
