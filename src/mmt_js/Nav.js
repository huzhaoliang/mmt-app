import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import '../mmt_css/bootstrap.min.css';
import '../img/favicon.ico'


class MMTNav extends React.Component
{
    render()
    {
        return (
            <Container>
                <Navbar bg="primary" expand="sm" className="navbar-fixed-top" variant="primary">
                <Navbar.Brand href="/">
                    <img className="d-inline-block align-top" src="../img/favicon.ico" alt="汽车人才网"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="mr-auto">
                    <Nav.Link href="/" className="text-white">首页</Nav.Link>
                    <Nav.Link href="#" className="text-white">职位搜索</Nav.Link>
                </Nav>
                <Navbar.Collapse id="basic-navbar-nav">
                    
                </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
        
}

export default MMTNav;