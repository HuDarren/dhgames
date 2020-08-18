import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {fetchOneItem} from '../../store/singleProduct'

export class singleProduct extends Component {
  componentDidMount() {
    const productId = this.props.match.params.id
    this.props.fetchOneItem(productId)
  }

  render() {
    const singleItem = this.props.singleProduct

    console.log('props', singleItem)

    return (
      <div>
        <img src={singleItem.photo} />
        <div>{singleItem.name}</div>
        <div>{singleItem.price}</div>
        <div>{singleItem.description}</div>
        <button>ADD</button>
        <div />
      </div>
    )
  }
}

const mapState = state => ({
  singleProduct: state.singleProduct
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
