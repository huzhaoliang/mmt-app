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
                            alert("登入系统失败");
                        }
                    }

        };
    }


    


}