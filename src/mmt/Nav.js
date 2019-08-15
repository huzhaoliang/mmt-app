import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Nav.css'

class MMTNav extends React.Component
{
    render()
    {
        return (
            <Navbar bg="dark" expand="sm" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img className="d-inline-block align-top" src="/favicon.ico" alt="汽车人才网"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="/">首页</Nav.Link>
                            <Nav.Link href="/job">职位搜索</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <NavDropdown className="dropdown-menu-left" title="游客，你好！" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">个人中心</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">退出</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/signIn">登入</Nav.Link>
                            <Nav.Link href="/signUp">注册</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
        
}

export default MMTNav;