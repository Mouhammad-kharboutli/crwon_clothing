import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// import store from './redux/store';
// provider will be the head component that will be parent to all our components
// this will enable us to use and access to STORE conponent to use and 
import { PersistGate } from 'redux-persist/integration/react';
import  {persistor, store} from "./redux/store";

import './index.css';
import App from './App';
// provider is a parent of every component in our app
//  we need to pass our store that we created to our provider to be able to 
//  access the STATE inside of it
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <PersistGate persistor={persistor}>
    <App />
  </PersistGate>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
