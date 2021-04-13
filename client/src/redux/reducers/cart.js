const SETCART = "SETCART";
const ADDTOCART = "ADDTOCART";
const REMOVEFROMCART = "REMOVEFROMCART";

const initialState = {
  products: [],
  totalPrice: 0,
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SETCART:
      let initialCount = 0;
      let initialPrice = 0;
      for(let product of action.products) {
        initialPrice += Number(product.cart.price)
        initialCount += Number(product.cart.count)
      }
      return {
        products: action.products,
        totalPrice: initialPrice,
        count: initialCount
      };
    case ADDTOCART:
      let totalPrice = Number(state.totalPrice) + Number(action.product.selectedConfig.totalPrice);
      // If product already in cart
      action.product.cart = {
        count: 1,
        price: action.product.selectedConfig.totalPrice,
      };
      let isDouble = false;
      const storage = JSON.parse(localStorage.getItem("cart")).map(
        (product) => {
          if (
            product._id === action.product._id &&
            JSON.stringify(product.selectedConfig) ===
              JSON.stringify(action.product.selectedConfig)
          ) {
            console.log("DOUBLE");
            isDouble = true;
            product.cart = {
              count: product.cart.count + 1,
              price:
                Number(product.cart.price) +
                Number(action.product.selectedConfig.totalPrice),
            };

            return product;
          } else return product;
        }
      );
      if (!isDouble) {
        storage.push(action.product);
      }
      localStorage.setItem("cart", JSON.stringify([...storage]));

      return {
        products: [...storage],
        totalPrice: totalPrice,
      };
    case REMOVEFROMCART:
      return {
        products: [
          ...state.products.filter(
            (product) => product._id !== action.productId
          ),
        ],
        totalPrice: state.totalPrice - action.price,
      };
    default:
      return state;
  }
};

export const setCart = (products) => ({ type: SETCART, products });
export const addToCart = (product) => ({ type: ADDTOCART, product });
export const removeFromCart = (productId) => ({
  type: REMOVEFROMCART,
  productId,
});

export default reducer;
