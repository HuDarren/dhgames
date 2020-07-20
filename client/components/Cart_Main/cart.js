import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../../store/cart'
import AllCart from './allCart'

export class Cart extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchCart(id)
  }

  render() {
    console.log('props', this.props)
    console.log('state', this.state)
    return <div>Helloo!</div>
  }
}

const mapState = state => ({
  cart: state.cart
})

const mapDispatch = (dispatch, ownProps) => {
  const id = ownProps.match.params.id
  return {
    fetchCart: () => {
      dispatch(fetchCart(id))
    }
  }
}

export default connect(mapState, mapDispatch)(Cart)

// cart main page
