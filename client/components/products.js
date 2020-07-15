import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchItems} from '../store/products'

export class Products extends Component {
  // constructor(props){
  //   super(props)
  // }

  componentDidMount() {
    this.props.fetchItems()
  }

  render() {
    // const products = this.props
    console.log('props', this.props)

    return <div>Hellooooo</div>
  }
}

const mapState = state => ({
  products: state.products.items
})

const mapDispatch = dispatch => ({
  fetchItems: () => dispatch(fetchItems())
})

export default connect(mapState, mapDispatch)(Products)
