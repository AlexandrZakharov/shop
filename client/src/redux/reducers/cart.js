const GETCART_PENDING = "GETCART-PENDING";
const GETCART_SUCCESS = "GETCART-SUCCESS";
const GETCART_ERROR = "GETCART-ERROR";

const initialState = {
  products: [],
  totalPrice: null
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case SETCART:
      return {
        products: action.products,
        totalPrice: action.totalPrice
      }
    case ADDTOCART: 
      return {
        products: [...state.products, action.product],
        totalPrice: totalPrice + action.price
      }
    default:
      return state
  }
}

