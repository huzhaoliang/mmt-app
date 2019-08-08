import React from 'react';

class MMT_Home extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {data:null};
    }

    render()
    {

    }

    componentDidMount()
    {
        fetch("http://localhost/api/hotjobs",{method:'GET', headers:{'Content-Type':'application/json;charset=UTF-8'},mode:'cors', cache:'default'})
        .then(response => response.json())
        .then(data => this.setState({data}))
    }

}

export default MMT_Home