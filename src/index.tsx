import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import 'antd/dist/antd.min.css';
import 'nprogress/nprogress.css';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';
import App from './App';
import stores from './stores';

ReactDOM.render(
    // <StrictMode>
    <Provider store={stores}>
        <Router>
            <App />
        </Router>
    </Provider>
    // </StrictMode>,
    , document.getElementById('root')
);

serviceWorker.unregister();
