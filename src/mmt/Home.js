import React from 'react';
import $ from 'jquery';


class Home extends React.Component
{
    
    constructor(props)
    {
        super(props);
        this.state = 
        {
            api_hotJobs:
            {
                async : false,
                type: 'GET',
                url: 'localhost/api/hotjobs',
                dataType: 'json',
                contentType: 'application/json;charset=utf-8',
                success: (data) =>
                        {
                            
                            console.log("success data");	
                        },
                error: (data) =>
                        {
                            alert("error data");
                        }
            }
        };
        
    }

    render = () =>
    {
        return (<div>Hi</div>);
    }

    componentDidMount=()=>
    {
        this.hotjobs();

    }

    componentWillUnmount=()=>
    {
        alert("bye");
    }

    //below is for api 
    hotjobs = () =>
    {
        $.ajax(this.state.api_hotJobs);
    }




}

export default Home