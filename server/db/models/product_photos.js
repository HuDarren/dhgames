const Sequelize = require('sequelize')
const db = require('../db')

const ProductPhotos = db.define('productPhoto', {
  path: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = ProductPhotos
