import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './homePage';


ReactDOM.render( < HomePage / > , document.getElementById('root'));

// If you want your app to work offline and load faster, youP can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();