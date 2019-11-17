import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PockedexReducer from './reducers/pockedex';
import App from './routes/App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = createStore(
  PockedexReducer
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);