import React from 'react'

export default function allProducts(props) {
  return (
    <div>
      {props.product.map(oneProduct => (
        <div key={oneProduct.id}>
          <div>{oneProduct.name}</div>
          <div>{oneProduct.price}</div>
          <div>{oneProduct.description}</div>
          <img src={oneProduct.photo} />
          <div>{oneProduct.condition}</div>
        </div>
      ))}
    </div>
  )
}

// list of all items for sale
