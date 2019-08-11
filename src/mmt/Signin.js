import React from 'react';
import $ from 'jquery';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

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
            api_signin:
            {
                async: false,
                type: 'POST',
                url: 'localhost/api/signIn',
                dataType: 'json',
                //contentType: "application/json;charset=utf-8",
                data: 
                {
                    'email': this.state.email,
                    'password': this.state.password
                    
                },
                success: function(data)
                            {
                                this.state.user = data.name;
                                this.state.token = data.token;  
                            },
                error: function()
                        {
                            alert("登入系统失败");
                        }
                    }

        };
    }

    render() 
    {
        return(
            <Container>
                <Row>
                    <Col sm="6">
                        <Form>
                            <Form.Group controlId="singinEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="singinPassword">
                                <Form.Label>Enter password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="singinChecbox">
                                <Form.Check type="checkbox" label="记住我的账号" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.signIn}> 
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

export default Signin;