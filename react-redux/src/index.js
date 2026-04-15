import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //Provider包裹跟组件，才能在所有组件中使用store
  <Provider store={store}>
    <App />
  </Provider>

);
