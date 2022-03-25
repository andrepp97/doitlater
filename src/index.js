import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/global.css';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store'

// Render
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
