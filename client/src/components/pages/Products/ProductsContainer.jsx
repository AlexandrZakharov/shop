import { connect } from "react-redux";
import Products from "./Products";
import { getProducts, clearState } from '../../../redux/reducers/products';
import { getProductPending } from '../../../redux/reducers/product';

const mapStateToProps = (state) => {
  return {
    type: state.productsReducer.type,
    products: state.productsReducer.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (type) => dispatch(getProducts(type)),
    getProductPending: () => dispatch(getProductPending()),
    clearState: () => dispatch(clearState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
