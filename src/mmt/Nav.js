import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Nav.css'

class MMTNav extends React.Component
{
    render()
    {
        return (
            <Navbar bg="primary" expand="sm" fixed="top" variant="primary">
                <Container>
                    <Navbar.Brand href="/">
                        <img className="d-inline-block align-top" src="/favicon.ico" alt="汽车人才网"/>
                    </Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    <Nav>
                        <Nav.Link href="/" className="text-white">首页</Nav.Link>
                        <Nav.Link href="/job" className="text-white">职位搜索</Nav.Link>
                    </Nav>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavDropdown className="dropdown-menu-left" title="游客，你好！" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">个人中心</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">退出</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/signIn" className="text-white">登入</Nav.Link>
                            <Nav.Link href="/signUp" className="text-white">注册</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
        
}

export default MMTNav;