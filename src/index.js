import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App.js';
import { BrowserRouter as Router } from 'react-router-dom';
import store from'./app/store.js'
ReactDOM.render(
<Router>
    <Provider store={store}>
        <App />
    </Provider>
</Router>
,document.getElementById('root'));
