import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';
// import {addPost, updateNewPostText} from './redux/state';

let renderEntireTree = (store) => {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
      document.getElementById('root')
    );
  }

renderEntireTree(store);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
