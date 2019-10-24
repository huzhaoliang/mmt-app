import $ from 'jquery';
import React from 'react';
import { Container, Row, Col, Image, Tabs, Tab } from 'react-bootstrap';

import './SignIn.css'
import MMTForm from './Form.js'

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
        }
    }

    render() 
    {
        const individual = {
            form:[
                {name:"邮箱", type:"email", id:"email"}, 
                {name:"密码", type:"password", id:"password"},
                {name:"复选框", type:"checkbox", message:"记住我的账号"},
                {name:"按钮", type:"submit", message:"登 录", id:"signIn_button", action:this.signIn}
            ]
        };
        const enterprise = {
            form:[
                {name:"账号", type:"text", id:"account"},
                {name:"邮箱", type:"email", id:"email_enterprise"}, 
                {name:"密码", type:"password", id:"password_enterprise"},
                {name:"复选框", type:"checkbox", message:"记住我的账号"},
                {name:"按钮", type:"submit", message:"登 录", id:"signIn_button_enterprise", action:this.signIn_enterprise}
            ]
        };
        return(
            <Container className="signin-container mt-5">
                <Row>
                    <Col sm="6">
                        <Image src="static/img/signin.jpg" fluid rounded />
                    </Col>
                    <Col sm="6">
                        <Tabs defaultActiveKey="individual" id="signin_tab">
                            <Tab className="mt-3" eventKey="individual" title="个人用户">
                                <MMTForm {...individual}/>
                            </Tab>
                            <Tab className="mt-3" eventKey="enterprise" title="企业用户">
                                <MMTForm {...enterprise}/>  
                            </Tab>
                        </Tabs>
                        <div className="annotation text-center my-2">
						  	<a href="/signIn">找回密码</a>
						  	<span> | </span>
						  	<a href="/signIn">免费注册</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

    signIn = (e) => 
    {
        e.preventDefault();
        const emailFormat = /^([0-9A-Za-z\-_]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
        // const passwordFormat = /^[\w_-]{6,16}$/;
        
        let email = $("#email").val();
        let pass = $("#password").val();

        if(email===undefined||email==null||email==="")
        {
            alert("邮箱不能为空");
            return
        }
        if(emailFormat.test(email)===false)
        {
            alert("邮箱格式不正确");
            return
        }
        if(pass===undefined||pass==null||pass==="")
        {
            alert("密码不能为空");
            return
        }
        this.start_sign_in(email, pass);
        window.location.href = '/';
        // this.props.history.push("/");
    }

    signIn_enterprise = (e) => 
    {
        e.preventDefault();
        const emailFormat = /^([0-9A-Za-z\-_]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
        // const passwordFormat = /^[\w_-]{6,16}$/;
        
        let email = $("#email_enterprise").val();
        let pass = $("#password_enterprise").val();

        if(email===undefined||email==null||email==="")
        {
            alert("邮箱不能为空");
            return
        }
        if(emailFormat.test(email)===false)
        {
            alert("邮箱格式不正确");
            return
        }
        if(pass===undefined||pass ==null||pass==="")
        {
            alert("密码不能为空");
            return
        }
        this.start_sign_in(email, pass);
        window.location.href = '/';
    }

    start_sign_in = (_email, _pass) =>
    {
        $.ajax({
            type: 'POST',
            url: "http://localhost:8080/api/signIn",
            dataType: "text",
            //contentType: "application/json;charset=utf-8",
            async: false,
            data: 
            { 
                "email" : _email,
                "password" : _pass,
            },
            success: function(data)
                        {
                            data = JSON.parse(data)
                            sessionStorage.token = data.token;
                            sessionStorage.setItem("user", data.name);
                        },
            error: function()
                        {
                            alert("Some failure occured!");
                        }
          });
    }
}

export default SignIn;