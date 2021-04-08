import "./App.css";
import Home from "./components/pages/Home/Home";
import { Route } from "react-router-dom";
import Products from "./components/pages/Products/ProductsContainer";
import Product from "./components/pages/Product/ProductContainer";
import Catalog from "./components/pages/Catalog/CatalogContainer";
import { useEffect } from "react";

function App(props) {
  useEffect(() => {
    if(!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]))
    }
  }, [])
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
    </div>
  );
}

export default App;
