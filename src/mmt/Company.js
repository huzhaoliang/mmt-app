import React from 'react';
import { Container, Image } from 'react-bootstrap';

import './Footer.css'

class Company extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state='';
    }

    render() {
        return(
            <Container>
                <div className="card my-3">
                    <img className="card-img-bottom" src="img/lg.gif" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Company