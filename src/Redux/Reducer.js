import * as types from './ActionType.js'

const initState = {
  products: [],
  error: '',
  loading: false,
  currentProduct: {},
  userId: '',
  cart1: [],
  userName:""
}
const ProductReducer = (state = initState, { type, payload }) => {

  switch (type) {
    //get all products
    case types.FETCH_DATA_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
      }
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        products: payload,
        error: '',
        loading: false,
      }
    case types.FETCH_DATA_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      }

  
      

    // get product from cart

    case types.FETCH_CART_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
      }
    case types.FETCH_CART_SUCCESS:
      return {
        ...state,
        cart: [...payload],
        error: '',
        loading: false,
      }
    case types.FETCH_CART_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    //userId
    case types.GETUSERID:
      return {
        ...state,
        userId: payload,
      }
   //username
   case types.GETUSERNAME:
    return {
      ...state,
      userName:payload
    }
    //GetCart
 
    case types.GETCARTDATA:

      console.log("hello")

      return {
        ...state,
        cart1: payload,
      }
      case types.GETINDIVIDUALDATA:
        return {
          ...state,
          currentProduct: payload
        }
        case types.LOGOUTUSER:
          return {
            ...state,
            userId: "",
            userName:""
          }
    default:
      return state
  }
}
export default ProductReducer
