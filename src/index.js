import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import './mmt/index.css';
import './mmt/bootstrap.min.css';

import MMTNav from './mmt/Nav.js';
import Home from './mmt/Home.js';

ReactDOM.render(<MMTNav />, document.getElementById('mmt-nav'));
ReactDOM.render(<Home />, document.getElementById('mmt-container'));

serviceWorker.unregister();


