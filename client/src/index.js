import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./Store";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "materialize-css";
import "react-materialize";




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
