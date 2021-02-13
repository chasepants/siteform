import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// REDUX 
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// ACTION BUCKET
const addBucket = _bucketName => {
  return {
    type: "ADD_BUCKET",
    bucketName: _bucketName
  }
}

const addTemplate = _templateName => {
  return {
    type: "ADD_TEMPLATE",
    templateName: _templateName
  }
}

// REDUCERs
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_BUCKET':
      return {
        ...state,
        bucketName: action.bucketName
      } 
    case 'ADD_TEMPLATE':
      return {
        ...state,
        templateName: action.templateName
      }
  }
}

let store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
store.dispatch(addBucket("test-bucket"));
store.dispatch(addTemplate(-1));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
