import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Nav.css'

class MMTNav extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {
            username: sessionStorage.user ? sessionStorage.user : "游客"
        };
    }

    logout = () => {
        sessionStorage.clear();
        this.setState({username: "游客"});
    }

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
                            {/* <Nav.Link href="/job">职位搜索</Nav.Link> */}
                        </Nav>
                        {/* 以下2种关于action的写法是一样的 */}
                        {/* <CreateNavDropdown user={this.state.username} action={this.logout}/> */}
                        <CreateNavDropdown user={this.state.username} action={()=>this.logout()}/>
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
                    <NavDropdown.Item onClick={props.action}>退出</NavDropdown.Item>
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