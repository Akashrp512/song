import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import App from './App';
import reducers from './reducers/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={createStore(reducers)} >
  <App />
  </Provider>
    
  </React.StrictMode>
);
