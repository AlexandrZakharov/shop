// Css
import "./App.css";

// Components
import Home from "./components/pages/Home/Home";
import Products from "./components/pages/Products/ProductsContainer";
import Product from "./components/pages/Product/ProductContainer";
import Catalog from "./components/pages/Catalog/CatalogContainer";
import Cart from "./components/pages/Cart/CartContainer";
import Ship from "./components/pages/Ship/Ship";
import About from "./components/pages/About/About";

// Zalupa
import { Route } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";

// ActionCreators
import { setCart } from "./redux/reducers/cart";


const mapStateToProps = (state) => ({
  cartProducts: state.cart.products
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCart: (products) => dispatch(setCart(products)),
  };
};

function App(props) {
  useEffect(() => {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    } else {
      const cartPoroducts = JSON.parse(localStorage.getItem("cart"));
      props.setCart(cartPoroducts);
    }
   
  }, []);
  return (
    <div className="App">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/catalog" exact>
        <Catalog />
      </Route>
      <Route path="/catalog/:productType" exact>
        <Products />
      </Route>
      <Route path={`/catalog/:productType/:productLink`} exact>
        <Product />
      </Route>
      <Route path={`/cart`} exact>
        <Cart />
      </Route>
      <Route path={`/ship`} exact>
        <Ship />
      </Route>
      <Route path={`/about`} exact>
        <About />
      </Route>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
