import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/configureStore';
import {Provider as ReduxProvider} from 'react-redux';

const store = configureStore();
Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
