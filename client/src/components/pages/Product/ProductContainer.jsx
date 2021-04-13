import { connect } from "react-redux";
import Product from "./Product";
import { getProduct, selectConfig, calculateTotalPrice } from "../../../redux/reducers/product";
import { addToCart } from "../../../redux/reducers/cart";

const mapStateToProps = (state) => {
  return {
    product: state.product.product
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (link) => dispatch(getProduct(link)),
    addToCart: (product) => dispatch(addToCart(product)),
    selectConfig: (configName, value) => dispatch(selectConfig(configName, value)),
    calculateTotalPrice: () => dispatch(calculateTotalPrice()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
