import axios from 'axios'

const GET_CART = 'GET_CART'

const getCart = data => ({
  type: GET_CART,
  data
})

export const fetchCart = userId => {
  return async dispatch => {
    try {
      // const {data} = await axios.get(`/api/cart/${userId}`)
      dispatch(getCart(data))
    } catch (error) {
      console.log('error')
    }
  }
}

const defaultCart = []

export default function cartReducer(state = defaultCart, action) {
  switch (action.type) {
    case GET_CART:
      return action.data
    default:
      return state
  }
}
