import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchItems} from '../../store/products'
import AllProducts from './allProducts'

export class Products extends Component {
  componentDidMount() {
    this.props.fetchItems()
  }

  render() {
    const products = this.props.products

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
