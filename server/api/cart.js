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
