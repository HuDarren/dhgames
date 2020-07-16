import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {fetchItems, fetchOneItem} from '../../store/products'
import AllProducts from './allProducts'
// import SingleProduct from './singleProduct'

export class Products extends Component {
  componentDidMount() {
    this.props.fetchItems()
  }

  render() {
    const products = this.props.products
    console.log('props', products)

    return (
      <div>
        <AllProducts product={products} />
      </div>
    )
  }
}

const mapState = state => ({
  products: state.products
})

const mapDispatch = dispatch => ({
  fetchItems: () => dispatch(fetchItems())
})

export default connect(mapState, mapDispatch)(Products)

// product main page
