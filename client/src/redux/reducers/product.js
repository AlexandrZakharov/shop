import ProductsAPI from "../../API/api";

const GETPRODUCT_PENDING = "GETPRODUCT-PENDING";
const GETPRODUCT_SUCCESS = "GETPRODUCT-SUCCESS";
const GETPRODUCT_ERROR = "GETPRODUCT-ERROR";

const SELECT_CONFIG = "SELECT-CONFIG";
const CALCULATE_TOTAL_PRICE = "CALCULATE-TOTAL-PRICE";

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
        loading: true,
      };
    case GETPRODUCT_SUCCESS:
      let config = [];
      if (action.product.configurations.length) {
        const arrOfConfKeys = Object.keys(
          action.product.configurations[0]
        ).filter((key) => key !== "_id" && key !== "price");

        config = arrOfConfKeys.map((key) => {
          const arr = [];
          return {
            configName: key,
            values: action.product.configurations
              .map((conf) => {
                if (!arr.includes(conf[key])) {
                  arr.push(conf[key]);
                  return { value: conf[key], isSelected: false };
                }
              })
              .filter((value) => value !== undefined),
          };
        });
      }
      config.push({
        configName: "colors",
        values: [
          ...action.product.colors.map((color) => {
            return {
              ...color,
              isSelected: false,
            };
          }),
        ],
      });

      return {
        product: {
          ...action.product,
          config,
          selectedConfig: { totalPrice: null },
        },
        loading: false,
        error: null,
      };

    case GETPRODUCT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case SELECT_CONFIG:
      return {
        ...state,
        product: {
          ...state.product,
          config: [
            ...state.product.config.map((conf) => {
              if (conf.configName === action.configName) {
                return {
                  ...conf,
                  values: [
                    ...conf.values.map((value) => {
                      if (value.value === action.value) {
                        
                        return {
                          ...value,
                          isSelected: true,
                        };
                      } else {
                        return {
                          ...value,
                          isSelected: false,
                        };
                      }
                    }),
                  ],
                };
              } else return conf;
            }),
          ],
          selectedConfig: {
            ...state.product.selectedConfig,
            [action.configName]: action.value,
          },
        },
      };
    case CALCULATE_TOTAL_PRICE:
      if (
        Object.keys(state.product.selectedConfig).length - 1 ===
        Object.keys(state.product.config).length
      ) {
        let price;
        const selectedConfig = { ...state.product.selectedConfig };
        delete selectedConfig.totalPrice;
        delete selectedConfig.colors;
        for (let conf of state.product.configurations) {
          const confDublicate = { ...conf };
          delete confDublicate._id;
          delete confDublicate.price;
          if (
            JSON.stringify(confDublicate) === JSON.stringify(selectedConfig)
          ) {
            price = conf.price;
          }
        }
        return {
          ...state,
          product: {
            ...state.product,
            selectedConfig: {
              ...state.product.selectedConfig,
              totalPrice: price,
            },
          },
        };
      } else return state;

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

export const selectConfig = (configName, value) => ({
  type: SELECT_CONFIG,
  configName,
  value,
});

export const calculateTotalPrice = () => ({ type: CALCULATE_TOTAL_PRICE });

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
  };
};

export default reducer;
