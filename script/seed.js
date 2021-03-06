'use strict'

const db = require('../server/db')
const {
  User,
  Products,
  ProductPhotos,
  OrderProduct,
  Orders
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'cody@email.com',
      password: '123',
      firstName: 'bob',
      lastName: 'doe'
    })
    // User.create({email: 'murphy@email.com', password: '123'}),
  ])

  const products = await Promise.all([
    Products.create({
      name: 'FF7',
      price: 12.0,
      description: 'great game',
      photo:
        'https://upload.wikimedia.org/wikipedia/en/c/c2/Final_Fantasy_VII_Box_Art.jpg',
      stock: 12,
      catagory: 'games',
      condition: 'new'
    }),
    Products.create({
      name: 'Mario',
      price: 22.0,
      description: 'good game',
      photo:
        'https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg',
      stock: 14,
      catagory: 'games',
      condition: 'old'
    })
  ])

  const productPhotos = await Promise.all([
    ProductPhotos.create({
      id: 1,
      path:
        'https://upload.wikimedia.org/wikipedia/en/c/c2/Final_Fantasy_VII_Box_Art.jpg'
    }),
    ProductPhotos.create({
      id: 2,
      path:
        'https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg'
    })
  ])

  const orders = await Promise.all([
    Orders.create({
      id: 1,
      status: 'complete',
      userId: 1
    })
  ])

  const orderProduct = await Promise.all([
    OrderProduct.create({
      id: 1,
      orderQuanity: 1,
      orderId: 1,
      productId: 1
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
