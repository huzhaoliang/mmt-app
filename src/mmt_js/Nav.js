import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
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
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Nav>
                    <Nav.Link href="/" className="text-white">首页</Nav.Link>
                    <Nav.Link href="#" className="text-white">职位搜索</Nav.Link>
                </Nav>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavDropdown className="text-white" title="游客，你好！" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.2">个人中心</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">退出</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/" className="text-white">登入</Nav.Link>
                        <Nav.Link href="#" className="text-white">注册</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
        
}

export default MMTNav;