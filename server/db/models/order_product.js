const Sequelize = require('sequelize')
const db = require('../db')

const OrderProduct = db.define('orderProduct', {
  orderQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'incomplete'
  }
})

module.exports = OrderProduct
