const router = require('express').Router()
const {Products} = require('../db/models')
// const { default: items } = require('../../client/components/products')
module.exports = router

// get all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Products.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

// get product by id
router.get('/:id', async (req, res, next) => {
  try {
    const item = await Products.findByPk(req.params.id)
    res.json(item)
  } catch (error) {
    next(error)
  }
})

//
