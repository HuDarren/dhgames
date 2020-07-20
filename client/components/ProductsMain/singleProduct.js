import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {fetchOneItem} from '../../store/products'

export class singleProduct extends Component {
  componentDidMount() {
    const productId = this.props.match.params.id
    this.props.fetchOneItem(productId)
  }

  render() {
    const products = this.props.products
    console.log('props', products)

    return (
      <div>
        <img src={products.photo} />
        <div>{products.name}</div>
        <div>{products.price}</div>
        <div>{products.description}</div>
        <div />
      </div>
    )
  }
}

const mapState = state => ({
  products: state.products
})

const mapDispatch = (dispatch, ownProps) => {
  const id = ownProps.match.params.id
  return {
    fetchOneItem: () => {
      dispatch(fetchOneItem(id))
    }
  }
}

export default connect(mapState, mapDispatch)(singleProduct)

// single view for each item for sale
