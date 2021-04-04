import { connect } from "react-redux";
import Product from "./Product";
import { getProduct } from "../../../redux/reducers/product";

const mapStateToProps = (state) => {
  return {
    product: state.product.product
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (link) => dispatch(getProduct(link))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
