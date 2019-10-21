import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Nav.css'

class MMTNav extends React.Component
{
    // constructor(props) 
    // {
    //     super(props);
    //     this.state = {
    //         username: sessionStorage.user
    //     };
    // }
    render()
    {
        let username = "游客";
        if (sessionStorage.user){
            username = sessionStorage.user;
        }
        // if (!this.state.username){
        //     this.setState({
        //         username: "游客"
        //     })
        // }
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
                        <CreateNavDropdown user={username}/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

function CreateNavDropdown(props){
    if (props.user !== "游客"){
        return(
            <Nav className="ml-auto">
                <NavDropdown className="dropdown-menu-left" title={props.user} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">个人中心</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">退出</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        );
    }
    return(
        <Nav className="ml-auto">
            <NavDropdown className="dropdown-menu-left" title={props.user} id="basic-nav-dropdown">
            </NavDropdown>
            <Nav.Link href="/signIn">登入</Nav.Link>
            <Nav.Link href="/signUp">注册</Nav.Link>
        </Nav>
    );
}

export default MMTNav;