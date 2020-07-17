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
