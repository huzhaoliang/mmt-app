import $ from 'jquery';
import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

import './Home.css'
import HorizontalForm from './HorizontalForm.js'

class Home extends React.Component
{
    
    constructor(props)
    {
        super(props);
        this.state = 
        {
            user:"",
            token:"",
            adList :{}, //ad you will use :)
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
 
    render(){
        const searchBox = {
            form:[
                {name:"城市", type:"text"}, 
                {name:"公司", type:"text"},
                {name:"职位", type:"text"},
                {name:"按钮", type:"submit", message:"搜 索", action:"signin"}
            ]
        };
        return(
            <Container className="mt-1">
                <SingleCarousel />
                <div className="my-2">
                    <HorizontalForm {...searchBox}/>
                </div>
            </Container>
                
        );
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

function SingleCarousel() {
    return(
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src="img/car_signin.jpg" alt="First slide"/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="img/car_signin.jpg" alt="Third slide"/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="img/car_signin.jpg" alt="Third slide"/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}


export default Home