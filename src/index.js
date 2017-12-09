import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from "./client/index";
import { Provider } from 'react-redux';
import allReducers from './client/common/reducers';


const store = createStore(allReducers);

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);