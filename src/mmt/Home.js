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
                contentType: 'application/json;charset=utf-8'
            }
        };
    }

    render()
    {
        return (<div>Hi</div>);
    }

    componentDidMount()
    {
        this.hotjobs();

    }


    //below is for api 
    hotjobs()
    {
        $.ajax({
            async: this.state.api_hotJobs.async,
            type: this.state.api_hotJobs.type,
            url: this.state.api_hotJobs.url,
            dataType: this.state.api_hotJobs.dataType,
            //contentType: this.state.api_hotJobs.contentType,
            success: (data) =>
                        {
                            alert(data);
                            console.log(data);	
                        },
            error: (data) =>
                    {
                        alert(data);
                        alert("查询数据为空");
                    }
          });
        
    }




}

export default Home