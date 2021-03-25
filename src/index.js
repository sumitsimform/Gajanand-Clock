import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Cart from './Pages/Cart/Cart'
// import UploadFile from './Pages/UploadFile/UploadFile';
// import MultiFacetedFrame from './Pages/MultiFacetedFrame/MultiFacetedFrame';
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import Card from './Components/Card'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import isLoaggedReducer from './Components/reducer/isLogged';
import ShowProductDetails from './Pages/ShowProductDetails/ShowProductDetails'
const store = createStore(
  isLoaggedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  

ReactDOM.render(
  // <Cart />
  <Provider store={store}>
    <App />
  </Provider>
  // <ShowProductDetails />
  ,
  document.getElementById('root')
);