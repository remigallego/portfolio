import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();