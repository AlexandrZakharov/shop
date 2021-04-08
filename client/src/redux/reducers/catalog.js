import ProductsAPI from "../../API/api";

const GETCATALOG_PENDING = "GETCATALOG-PENDING";
const GETCATALOG_SUCCESS = "GETCATALOG-SUCCESS";
const GETCATALOG_ERROR = "GETCATALOG-ERROR";

const initialState = {
  catalog: null,
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETCATALOG_PENDING:
      return {
        catalog: null,
        loading: true,
        error: false,
      };
    case GETCATALOG_SUCCESS:
      return {
        catalog: action.catalog,
        loading: false,
        error: false,
      };
    case GETCATALOG_ERROR:
      return {
        catalog: null,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const getProductPending = () => ({ type: GETCATALOG_PENDING });
const getProductSuccess = (catalog) => ({
  type: GETCATALOG_SUCCESS,
  catalog,
});
const getProductError = (error) => ({ type: GETCATALOG_ERROR, error });

export const getCatalog = () => {
  return (dispatch) => {
    dispatch(getProductPending());
    ProductsAPI.getCatalog()
      .then((res) => {
        if (res.error) {
          console.log(res.error);
          dispatch(getProductError(res.error));
        } else {
          dispatch(getProductSuccess(res));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(getProductError(error));
      });
  };
};

export default reducer;
