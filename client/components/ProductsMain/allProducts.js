import React from 'react'

export default function allProducts(props) {
  return (
    <div>
      {props.product.map(oneProduct => (
        <div key={oneProduct.id}>{oneProduct.name}</div>
      ))}
    </div>
  )
}

// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
// import {fetchItems} from '../../store/products'

// export class AllProducts extends Component {
//   // constructor(props){
//   //   super(props)
//   // }

//   componentDidMount() {
//     this.props.fetchItems()
//   }

//   render() {
//     const products = this.props.products[0]
//     console.log('props', products)

//     return <div></div>
//   }
// }

// const mapState = (state) => ({
//   products: state.products,
// })

// const mapDispatch = (dispatch) => ({
//   fetchItems: () => dispatch(fetchItems()),
// })

// export default connect(mapState, mapDispatch)(AllProducts)
