import axios from 'axios'

const GET_ONE = 'GET_ONE'
const SET_ONE = 'SET_ONE'

const getOne = () => ({
  type: GET_ONE
})

const setOne = data => ({
  type: SET_ONE,
  data
})

export const fetchOneItem = id => {
  return async dispatch => {
    dispatch(getOne())
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch(setOne(data))
  }
}

const defaultProducts = []

export default function singleProductReducer(state = defaultProducts, action) {
  switch (action.type) {
    case GET_ONE:
      return state
    case SET_ONE:
      return action.data

    default:
      return state
  }
}
