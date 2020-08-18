import React from 'react'
// import {Link} from 'react-router-dom'
import history from '../../history'
// import {useHistory} from 'react-router'

export default function allProducts(props) {
  // const history = useHistory()

  return (
    <div>
      {props.product.map(oneProduct => (
        <div key={oneProduct.id}>
          <img
            src={oneProduct.photo}
            onClick={() => history.push(`/products/${oneProduct.id}`)}
          />
          <div>{oneProduct.name}</div>
          <div>${oneProduct.price}</div>
          <div>{oneProduct.description}</div>
          <div>{oneProduct.condition}</div>
          <button>Add</button>
          <div />
          <div />
          <div />
        </div>
      ))}
    </div>
  )
}

// list of all items for sale
