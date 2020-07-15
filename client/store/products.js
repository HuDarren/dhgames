import axios from 'axios'

const GET_ITEMS = 'GET_ITEMS'
// const SET_ITEMS = 'SET_ITEMS'

const getItems = () => ({
  type: GET_ITEMS
})

export const fetchItems = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/products')
      dispatch(getItems(data))
    } catch (error) {
      console.log('error')
    }
  }
}

const defaultProducts = {
  items: []
}

export default function productReducer(state = defaultProducts, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {...state, items: action.data}
    default:
      return state
  }
}
