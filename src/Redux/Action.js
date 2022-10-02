import * as types from './ActionType.js'
import Axios from 'axios'

//FetchData functions
const fetchDataRequest = (payload) => {
  return {
    type: types.FETCH_DATA_REQUEST,
    payload,
  }
}
export const fetchDataSuccess = (payload) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload,
  }
}
const fetchDataFailure = (payload) => {
  return {
    type: types.FETCH_DATA_FAILURE,
    payload,
  }
}

//fetData axios function
export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest)
    Axios.get('https://maxfashion-by-gaurav.herokuapp.com/menproducts')
      .then((r) => dispatch(fetchDataSuccess(r.data)))
      .catch((e) => dispatch(fetchDataFailure(e.data)))
  }
}
export const getDatabyPrie = (payload) => {
  return (dispatch) => {
    dispatch(fetchDataRequest)
    Axios.get(
      `https://maxfashion-by-gaurav.herokuapp.com/menproducts/sort/${payload}`,
    )
      .then((r) => dispatch(fetchDataSuccess(r.data)))
      .catch((e) => dispatch(fetchDataFailure(e.data)))
  }
}
export const getDatabyType = (payload) => {
  return (dispatch) => {
    dispatch(fetchDataRequest)
    Axios.get(
      `https://maxfashion-by-gaurav.herokuapp.com/menproducts/filter/type/${payload}`,
    )
      .then((r) => dispatch(fetchDataSuccess(r.data)))
      .catch((e) => dispatch(fetchDataFailure(e.data)))
  }
}
export const getDatabyColor = (payload) => {
  return (dispatch) => {
    dispatch(fetchDataRequest)
    Axios.get(
      `https://maxfashion-by-gaurav.herokuapp.com/menproducts/filter/color/${payload}`,
    )
      .then((r) => dispatch(fetchDataSuccess(r.data)))
      .catch((e) => dispatch(fetchDataFailure(e.data)))
  }
}
export const getDatabySize = (payload) => {
  return (dispatch) => {
    dispatch(fetchDataRequest)
    Axios.get(
      `https://maxfashion-by-gaurav.herokuapp.com/menproducts/filter/size/${payload}`,
    )
      .then((r) => dispatch(fetchDataSuccess(r.data)))
      .catch((e) => dispatch(fetchDataFailure(e.data)))
  }
}

//getSingleProduct function
const getSingleProductRequest = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_REQUEST,
    payload,
  }
}
const getSingleProductSuccess = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_SUCCESS,
    payload,
  }
}
const getSingleProductFailure = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_FAILURE,
    payload,
  }
}
const addProductCartRequest = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_REQUEST,
    payload,
  }
}
const addProductCartSuccess = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_SUCCESS,
    payload,
  }
}
const addProductCartFailure = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_FAILURE,
    payload,
  }
}

//add to cart axios functionality

//Fetch from cart functions
const fetchCartRequest = (payload) => {
  return {
    type: types.FETCH_CART_REQUEST,
    payload,
  }
}
const fetchCartSuccess = (payload) => {
  return {
    type: types.FETCH_CART_SUCCESS,
    payload,
  }
}
const fetchCartFailure = (payload) => {
  return {
    type: types.FETCH_CART_FAILURE,
    payload,
  }
}
const deleteProductCartRequest = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_REQUEST,
    payload,
  }
}
const deleteProductCartSuccess = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_SUCCESS,
    payload,
  }
}
const deleteProductCartFailure = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_FAILURE,
    payload,
  }
}

export const login1 = (payload) => {
  return {
    type: types.GETUSERID,
    payload,
  }
}

export const loginUser = (payload) => {
  return {
    type: types.GETUSERNAME,
    payload,
  }
}
export const AddToCartBackend = (payload) => (dispatch) => {
  const { userId, elemId } = payload
  Axios.get(
    `https://maxfashion-by-gaurav.herokuapp.com/cart/${userId}/${elemId}`,
  )
    .then((response) => {
      console.log(response)
    })
    .then((response) => {
      dispatch(GetDataOfCartFromBackEnd(userId))
    })
    .catch((error) => {
      console.log(error)
    })
}

const GetCartDataRuducer = (payload) => {
  console.log(types.GETCARTDATA)
  return {
    type: types.GETCARTDATA,
    payload,
  }
}
export const GetDataOfCartFromBackEnd = (payload) => (dispatch) => {
  Axios.get(
    `https://maxfashion-by-gaurav.herokuapp.com/cart/product/men/${payload}`,
  )
    .then((response) => {
      console.log(response.data)
      dispatch(GetCartDataRuducer(response.data))
    })
    .catch((error) => {
      console.log(error)
    })
}

const GetIndividualDataFromBackend = (payload) => {
  // console.log(types.GETCARTDATA)
  return {
    type: types.GETINDIVIDUALDATA,
    payload,
  }
}
export const getIndividualData = (payload) => (dispatch) => {
  Axios.get(`https://maxfashion-by-gaurav.herokuapp.com/menproducts/${payload}`)
    .then((response) => {
      console.log(response.data)
      dispatch(GetIndividualDataFromBackend(response.data))
    })
    .catch((error) => {
      console.log(error)
    })
}

export const HandleUserLogout = (payload) => {
  return {
    type: types.LOGOUTUSER,
    payload,
  }
}

export const CartRemove = (userId, id) => (dispatch) => {
  Axios.delete(
    `https://maxfashion-by-gaurav.herokuapp.com/cart/productdelete/${userId}/${id}`,
  )
    .then((response) => {
      console.log('deleteCart', response)
    })
    .then(()=>{dispatch(GetDataOfCartFromBackEnd(userId))})
    .catch((error) => {
      console.log(error)
    })
}
