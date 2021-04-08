import ProductsAPI from "../../API/api";

const GETPRODUCTS_PENDING = "GETPRODUCTS-PENDING";
const GETPRODUCTS_SUCCESS = "GETPRODUCTS-SUCCESS";
const GETPRODUCTS_ERROR = "GETPRODUCTS-ERROR";

const CLEAR_STATE = "CLEAR-STATE";

const initialState = {
  type: null,
  products: null,
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETPRODUCTS_PENDING:
      return {
        ...state,
        loading: true
      }
    case GETPRODUCTS_SUCCESS:
      return {
        type: action.products[0].type,
        products: action.products,
        loading: false,
        error: null
      }
    case GETPRODUCTS_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
    case CLEAR_STATE:
      return {
        type: null,
        products: null,
        loading: false,
        error: false,
      }  
    default:
      return state;
  }
};

const getProductsPending = () => ({ type: GETPRODUCTS_PENDING });
const getProductsSuccess = (products) => ({
  type: GETPRODUCTS_SUCCESS,
  products,
});
const getProductsError = () => ({ type: GETPRODUCTS_ERROR });
export const clearState = () => ({ type: CLEAR_STATE })

export const getProducts = (type) => {
  return (dispatch) => {
    dispatch(getProductsPending());
    ProductsAPI.getProducts(type)
      .then((res) => {
        if (res.length) {
          dispatch(getProductsSuccess(res));
        } else {
          dispatch(getProductsError());
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(getProductsError());
      });
  };
};

export default reducer;
