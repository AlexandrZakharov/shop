import "./App.css";
import Navbar from "./components/common/Navbar";
import Header from "./components/common/Header";
import Home from "./components/pages/Home/Home";
import { Route } from "react-router-dom";
import Products from "./components/pages/Products/ProductsContainer";
import Product from "./components/pages/Product/ProductContainer";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/catalog">
        <Navbar />
      </Route>
      <Route path="/catalog/phones" exact>
        <Products />
      </Route>
      <Route path={`/catalog/:productType/:productId`} exact>
        <Product />
      </Route>
    </div>
  );
}

export default App;
