import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Nav from 'react-bootstrap/Nav';

class MMT_Nav extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
                <Nav class="navbar navbar-default navbar-fixed-top navbar-expand-sm">
                    <div id="homeNavContainer" class="container">
                        
                        <div class="navbar-header collapse navbar-collapse">
                            <ul class="navbar-nav">
                                <li>
                                    <a class="navbar-brand" herf="/">
                                        
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">首页</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">职位搜索</a>
                                </li>
                            </ul>
                            
                        </div>			
                    </div>
                </Nav>


        );
    }
        
}

export default MMT_Nav;