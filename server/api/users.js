const router = require('express').Router()
const {User, OrderProduct} = require('../db/models')
const Orders = require('../db/models/orders')
const Products = require('../db/models/products')
const ProductPhotos = require('../db/models/product_photos')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// get all items in user cart that are not purchased

router.get('/:userId', async (req, res, next) => {
  try {
    const cartItems = await User.findByPk(req.params.userId, {
      where: {
        userId: req.params.userId
      },
      include: [
        {model: Orders},
        {model: OrderProduct},
        {model: Products},
        {model: ProductPhotos}
      ]
    })
    res.json(cartItems)
  } catch (error) {
    console.log('error')
  }
})
