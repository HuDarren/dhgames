const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('orders', {
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Orders
