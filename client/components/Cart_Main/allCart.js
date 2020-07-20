import React from 'react'

export default function allCart(props) {
  return (
    <div>
      {props.cartItems.map(oneItem => (
        <div key={oneItem.id}>
          <div>{oneItem.orderProducts[0].product.name}</div>
          <div>{oneItem.orderProducts[0].orderQuantity}</div>
          <div>{oneItem.orderProducts[0].product.price}</div>
          <img src={oneItem.orderProducts[0].product.photo} />
        </div>
      ))}
    </div>
  )
}

// all items in cart
