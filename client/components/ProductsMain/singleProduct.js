import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {fetchOneItem} from '../../store/singleProduct'

export class singleProduct extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     isLoaded: false,
  //   }
  // }

  componentDidMount() {
    const productId = this.props.match.params.id
    this.props.fetchOneItem(productId)
    // console.log('mount', this.state.isLoaded)
    // if (!this.state.isLoaded) {
    //   console.log('before', this.state.isLoaded)
    //   window.location.reload()
    //   this.setState({isLoaded: true})
    //   console.log('after', this.state.isLoaded)
    // }
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
