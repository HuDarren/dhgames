const router = require('express').Router()
const {
  Products,
  OrderProduct,
  Orders,
  ProductPhotos,
  User
} = require('../db/models')

module.exports = router

// get all items in user cart that are not purchased

router.get('/:userId', async (req, res, next) => {
  try {
    const cartItems = await Orders.findAll({
      where: {
        status: 'incomplete',
        userId: req.params.userId
      },
      include: [{model: OrderProduct, include: [{model: Products}]}]
    })
    res.json(cartItems)
  } catch (error) {
    console.log('error')
  }
})

// add item to cart based on user id

router.post('/add/:item', async (req, res, next) => {
  try {
    // const {productId, orderId, orderQuantity} = req.body
    const newItem = await OrderProduct.create({
      orderQuantity: 1,
      orderId: req.order.id,
      productId: req.params.item
    })
    console.log(newItem.id)
    console.log(req.params.item)
    const order = await Orders.findByPk(newItem.id, {
      include: [
        {
          model: Orders
        }
      ]
    })
    res.json(order)
  } catch (error) {
    next(error)
  }
})

router.post('/new/:item/:order', async (req, res, next) => {
  try {
    // const {productId, orderId, orderQuantity} = req.body
    const newItem = await OrderProduct.create({
      orderQuantity: 1,
      orderId: req.params.order,
      productId: req.params.item
    })

    const order = await Orders.findByPk(newItem.id, {
      include: [
        {
          model: Orders
        }
      ]
    })
    res.json(order)
  } catch (error) {
    next(error)
  }
})

// delete item in cart based on user id
