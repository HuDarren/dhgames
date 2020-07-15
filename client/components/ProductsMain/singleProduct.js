import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchOneItem} from '../../store/products'

export class singleProduct extends Component {
  componentDidMount() {
    // const productId = this.props.match.params.id
    // this.props.fetchSingleItem(productId)
  }

  render() {
    const products = this.props
    console.log('props', products)

    return <div>{products}</div>
  }
}

const mapState = state => ({
  products: state.products
})

const mapDispatch = dispatch => ({
  fetchSingleItem: () => dispatch(fetchSingleItem())
})

export default connect(mapState, mapDispatch)(singleProduct)
