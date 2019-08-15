import $ from 'jquery';
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './Signin.css'

class SignIn extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            user :'',
            token : '',
            email : 'na',
            password : 'na',
            // api_signin:
            // {
            //     async: false,
            //     type: 'POST',
            //     url: 'localhost/api/signIn',
            //     dataType: 'json',
            //     //contentType: "application/json;charset=utf-8",
            //     data: 
            //     {
            //         'email': this.state.email,
            //         'password': this.state.password
                    
            //     },
            //     success: function(data)
            //                 {
            //                     this.state.user = data.name;
            //                     this.state.token = data.token;  
            //                 },
            //     error: function()
            //             {
            //                 alert("登入系统失败");
            //             }
            //         }

        };
    }

    render() 
    {
        return(
            <Container className="signin-container mt-3">
                <Row>
                    <Col sm="6">
                        <Form>
                            <Form.Group controlId="singinEmail">
                                <Form.Label>邮箱</Form.Label>
                                <Form.Control type="email" placeholder="请输入邮箱" />
                                <Form.Text className="text-muted">
                                邮箱仅对本人显示
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="singinPassword">
                                <Form.Label>密码</Form.Label>
                                <Form.Control type="password" placeholder="请输入密码" />
                            </Form.Group>
                            <Form.Group controlId="singinChecbox">
                                <Form.Check type="checkbox" label="记住我的账号" />
                            </Form.Group>
                            <Button className="btn-lg btn-block" type="submit" onClick={this.signIn}> 
                                登 录
                            </Button>
                        </Form>
                    </Col>
                    <Col sm="6">
                    </Col>
                </Row>
            </Container>
        );
    }



    //below is function
    signIn = () => 
    {
        alert("signin");
        const emailFormat = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
        const passwordFormat = /^[\w_-]{6,16}$/;
        
        let email = $("#input_email").val();
        let pass = $("#input_password").val();

        this.setState({email : $("#input_email").val()}); 
        this.setState({password : $("#input_password").val()});
       

        // if(this.state.email==undefined||this.state.email==null||this.state.email=="")
        // {
        //     alert("邮箱不能为空");
        //     return
        // }
        
        if(emailFormat.test(this.state.email)==false)
        {
            alert("邮箱格式不正确");
            return
        }
        
        // if(this.state.password ==undefined||this.state.password ==null||this.state.password =="")
        // {
        //     alert("密码不能为空");
        //     return
        // }

        this.state.signIn();
    }


}

function SigninController() {
    return(
        <Router>
            <Switch>
                <Route exact path="/signIn" component={SignIn}></Route>
            </Switch>
        </Router>
    );
}

export default SigninController;