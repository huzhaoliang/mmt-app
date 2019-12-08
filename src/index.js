import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './mmt/index.css';
import './mmt/bootstrap.min.css';

import Job from './mmt/Job';
import Home from './mmt/Home';
import MMTNav from './mmt/Nav';
import SignIn from './mmt/SignIn';
import SignUp from './mmt/SignUp';
import Footer from './mmt/Footer';
import Company from './mmt/Company';

function PageController() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" children={<Home />}></Route>
                <Route path="/signIn" children={<SignIn />}></Route>
                <Route path="/signUp" children={<SignUp />}></Route>
                <Route path="/company" children={<Company />}></Route>
                <Route path="/job/:id" children={<Job />}></Route>
            </Switch>
        </Router>
    );
}

ReactDOM.render(<MMTNav />, document.getElementById('mmt-nav'));
ReactDOM.render(<PageController />, document.getElementById('mmt-container'));
ReactDOM.render(<Footer />, document.getElementById('mmt-footer'));
serviceWorker.unregister();


