import { connect } from "react-redux";
import Catalog from './Catalog';
import { getCatalog } from "../../../redux/reducers/catalog";

const mapStateToProps = (state) => {
  return {
    catalog: state.catalog.catalog
  };
};

const mapDispatchToProps = (dispatch) => {
  return {  
    getCatalog: () => dispatch(getCatalog())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);