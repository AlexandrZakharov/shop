import { applyMiddleware, combineReducers, createStore } from "redux";
import products from './reducers/products';
import product from './reducers/product';
import catalog from './reducers/catalog';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
  productsReducer: products,
  product,
  catalog
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;