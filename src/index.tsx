import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/index.scss';
import * as serviceWorker from './serviceWorker';
import App from './App';
import stores from './stores';

ReactDOM.render(
    <StrictMode>
        <Provider store={stores}>
            <App />
        </Provider>
    </StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
