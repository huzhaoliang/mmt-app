import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './mmt_css/index.css';
import './mmt_css/bootstrap.min.css';

import Nav from './mmt_js/Nav.js';
import Home from './mmt_js/Home.js';

ReactDOM.render(<Nav />, document.getElementById('mmt-nav'));
ReactDOM.render(<Home />, document.getElementById('mmt-container'));

serviceWorker.unregister();


