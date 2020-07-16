const Sequelize = require('sequelize')
const db = require('../db')

const OrderProduct = db.define('orderProduct', {
  orderQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
  // price: {
  //   type: Sequelize.DECIMAL(10, 2),
  //   allowNull: false,
  //   validate: {
  //     notEmpty: true
  //   }
  // }
})

module.exports = OrderProduct
