import ProductsAPI from "../../API/api";

const GETPRODUCT_PENDING = "GETPRODUCT-PENDING";
const GETPRODUCT_SUCCESS = "GETPRODUCT-SUCCESS";
const GETPRODUCT_ERROR = "GETPRODUCT-ERROR";

const initialState = {
  product: null,
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETPRODUCT_PENDING:
      return {
        product: null,
        error: false,
        loading: true
      }
    case GETPRODUCT_SUCCESS:
      return {
        product: action.product,
        loading: false,
        error: null
      }
    case GETPRODUCT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state;
  }
};

export const getProductPending = () => ({ type: GETPRODUCT_PENDING });
const getProductSuccess = (product) => ({
  type: GETPRODUCT_SUCCESS,
  product,
});
const getProductError = (error) => ({ type: GETPRODUCT_ERROR, error });

export const getProduct = (link) => {
  return (dispatch) => {
    dispatch(getProductPending());
    ProductsAPI.getProduct(link)
      .then((res) => {
        if (res.error) {
          console.error(res.error);
          dispatch(getProductError(res.error));
        } else {
          dispatch(getProductSuccess(res));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(getProductError(error));
      });
  }
}

export default reducer;
