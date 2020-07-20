import axios from 'axios'

const GET_ITEMS = 'GET_ITEMS'
const SET_ITEMS = 'SET_ITEMS'
const GET_ONE = 'GET_ONE'
const SET_ONE = 'SET_ONE'

const getItems = () => ({
  type: GET_ITEMS
})

const setItems = data => ({
  type: SET_ITEMS,
  data
})

// const getOne = () => ({
//   type: GET_ONE,
// })

// const setOne = (data) => ({
//   type: SET_ONE,
//   data,
// })

export const fetchItems = () => {
  return async dispatch => {
    try {
      dispatch(getItems())
      const {data} = await axios.get('/api/products')
      dispatch(setItems(data))
    } catch (error) {
      console.log('error')
    }
  }
}

// export const fetchOneItem = (id) => {
//   return async (dispatch) => {
//     dispatch(getOne())
//     const {data} = await axios.get(`/api/products/${id}`)
//     dispatch(setOne(data))
//   }
// }

const defaultProducts = []

export default function productReducer(state = defaultProducts, action) {
  switch (action.type) {
    case GET_ITEMS:
      return state
    case SET_ITEMS:
      return action.data
    // case GET_ONE:
    //   return state
    // case SET_ONE:
    //   return action.data

    default:
      return state
  }
}

// export default function productReducer(state = defaultProducts, action) {
//   switch (action.type) {
//     case GET_ITEMS:
//       return {...state}
//     case SET_ITEMS:
//       return {...state, items: action.data}
//     default:
//       return state
//   }
// }
