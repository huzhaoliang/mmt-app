import React from 'react';
import $ from 'jquery';

class SignUp extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            user :'',
            token : '',
            email : '',
            password : "",
            api_signup:
            {
                async: false,
                type: 'POST',
                url: 'localhost/api/signUp',
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
                            alert("注册用户失败");
                        }
                    }

        };
    }

    render = () =>
    {
        reutrn(<h1>signup</h1>)
    }

    //sign up function
    signUp = () =>
    {
        const emailFormat = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
        const passwordFormat = /^[\w_-]{6,16}$/;

        username= $("#username_input").val();
        email = $("#email_input").val();
        password = $("#password_input").val();
        passcode = $("#passcode_input").val();

        if(username==undefined||username==null||username=="")
        {
            alert("用户名不能为空");
        }
        
        if(email==undefined||email==null||email=="")
        {
            alert("邮箱不能为空");
            return
        }
        
        if(emailFormat.test(email)==false)
        {
            alert("邮箱格式不正确");
            return
        }
        
        if(password==undefined||password==null||password=="")
        {
            alert("密码不能为空");
            return
        }
        
        if(passwordFormat.test(password)==false)
        {
            alert("密码不符合要求");
            return
        }
        
        
        if(passcode==undefined||passcode==null||passcode=="")
        {
            alert("密码需要确认");
            return
        }
        
        if(passcode!=password)
        {
            alert("密码两次输入不一致");
            return
        }

        $.ajax({
            type: 'POST',
            url: api_signUp,
            dataType: "text",
            //contentType: "application/json;charset=utf-8",
            async: false,
            data: 
            {
                "name" : username,
                "email" : email,
                "password" : password
            },
            success: function(res)
                        {
                            alert(res);
                            //window.location.href = "signin";
                            //sessionStorage["redirect_uri"] = "/index"
                            toSignIn("/index");
                        },
            error: function(res)
                        {
                            alert(res);
                        }
            
          });

    }



}