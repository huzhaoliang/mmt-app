import React from 'react';
import './mmt_css/index.css';
import ReactDOM from 'react-dom';
import './mmt_css/bootstrap.min.css';
import MMTNav from './mmt_js/MMTNav.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <MMTNav />, 
    document.getElementById('mmt-nav')
);


serviceWorker.unregister();


