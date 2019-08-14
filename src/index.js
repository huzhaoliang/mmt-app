import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './mmt/index.css';
import './mmt/bootstrap.min.css';

import Home from './mmt/Home';
import MMTNav from './mmt/Nav';
import SigninController from './mmt/Signin'


ReactDOM.render(<MMTNav />, document.getElementById('mmt-nav'));
// ReactDOM.render(<Home />, document.getElementById('mmt-container'));
ReactDOM.render(<SigninController />, document.getElementById('mmt-container'));

serviceWorker.unregister();


