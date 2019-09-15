import $ from 'jquery';
import React from 'react';
import { Container, Carousel, Row, Col, Image, CardDeck, Card, Badge, Table } from 'react-bootstrap';

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
                <div className="my-4">
                    <HorizontalForm {...searchBox}/>
                </div>
                <JobCard />
                <div className="my-2">
                    <a href="/"><Image className="w-100" src="img/index2.gif" alt="First slide" fluid/></a>
                </div>
                <Row className="my-2">
                    <Col>
                        <a href="/"><Image className="w-100" src="img/index1.gif" alt="First slide"/></a>
                    </Col>
                    <Col>
                        <a href="/"><Image className="w-100" src="img/index1.gif" alt="First slide"/></a>
                    </Col>
                </Row>
                <div className="jobTable my-2">
                    <JobTable />
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

function JobCard() {
    return(
        <CardDeck>
            <Card>
                <Card.Link href="#">
                    <Card.Img variant="top" src="img/index3.jpg" />
                </Card.Link>
                <Card.Body>
                    <Card.Title>车身开发工程师</Card.Title>
                    <Card.Text>
                        <strong><span className="salary">面议 </span></strong>
                        经验3年 丨 本科 丨 南昌市
                        <div className="mt-1">
                            <Badge variant="success" className="mr-1">五险一金</Badge>
                            <Badge variant="success" className="mr-1">加班补助</Badge>
                            <Badge variant="success" className="mr-1">生日福利</Badge>
                            <Badge variant="success" className="mr-1">年底双薪</Badge>
                        </div>
                    </Card.Text>
                    </Card.Body>
                <Card.Footer>
                    <Card.Link href="#" className="text-muted">查看详情...</Card.Link>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Link href="#">
                    <Card.Img variant="top" src="img/index3.jpg" />
                </Card.Link>
                <Card.Body>
                    <Card.Title>电动汽车工程师</Card.Title>
                    <Card.Text>
                        <strong><span className="salary">6K-15K </span></strong>
                        经验5年 丨 本科 丨 资阳市
                        <div className="mt-1">
                            <Badge variant="success" className="mr-1">五险一金</Badge>
                            <Badge variant="success" className="mr-1">加班补助</Badge>
                            <Badge variant="success" className="mr-1">生日福利</Badge>
                            <Badge variant="success" className="mr-1">年底双薪</Badge>
                        </div>
                    </Card.Text>
                    </Card.Body>
                <Card.Footer>
                    <Card.Link href="#" className="text-muted">查看详情...</Card.Link>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Link href="#">
                    <Card.Img variant="top" src="img/index3.jpg" />
                </Card.Link>
                <Card.Body>
                    <Card.Title>项目推进管理</Card.Title>
                    <Card.Text>
                        <strong><span className="salary">面议 </span></strong>
                        面议 毕业生 丨 本科 丨 广州市
                        <div className="mt-1">
                            <Badge variant="success" className="mr-1">五险一金</Badge>
                            <Badge variant="success" className="mr-1">加班补助</Badge>
                            <Badge variant="success" className="mr-1">生日福利</Badge>
                            <Badge variant="success" className="mr-1">年底双薪</Badge>
                        </div>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Link href="#" className="text-muted">查看详情...</Card.Link>
                </Card.Footer>
            </Card>
        </CardDeck>
    );
}

function JobTable() {
    return(
        <Table borderless className="my-0">
            <tbody>
                <tr>
                    <td>
                        <ul className="my-0">
                            <li>
                                <a className="company" href="/">深圳市新力达汽车贸易有限公司</a>
                                <span>&nbsp;&nbsp;</span>
                                <a href="/">服务顾问</a>
                            </li>
                            <li>
                                <a className="company" href="/">深圳市标鹏汽车有限公司</a>
                                <span>&nbsp;&nbsp;</span>
                                <a href="/">销售顾问</a>
                            </li>
                            <li>
                                <a className="company" href="/">广汽丰田诚立番禺店</a>
                                <span>&nbsp;&nbsp;</span>
                                <a href="/">机修人员</a>
                            </li>
                        </ul>
                    </td>
                    <td>
                        <ul className="my-0">
                            <li>
                                <a className="company" href="/">深圳市新力达汽车贸易有限公司</a>
                                <span>&nbsp;&nbsp;</span>
                                <a href="/">服务顾问</a>
                            </li>
                            <li>
                                <a className="company" href="/">深圳市标鹏汽车有限公司</a>
                                <span>&nbsp;&nbsp;</span>
                                <a href="/">销售顾问</a>
                            </li>
                            <li>
                                <a className="company" href="/">广汽丰田诚立番禺店</a>
                                <span>&nbsp;&nbsp;</span>
                                <a href="/">机修人员</a>
                            </li>
                        </ul>
                    </td>
                    <td>
                        <ul className="my-0">
                            <li>
                                <a className="company" href="/">深圳市新力达汽车贸易有限公司</a>
                                <span>&nbsp;&nbsp;</span>
                                <a href="/">服务顾问</a>
                            </li>
                            <li>
                                <a className="company" href="/">深圳市标鹏汽车有限公司</a>
                                <span>&nbsp;&nbsp;</span>
                                <a href="/">销售顾问</a>
                            </li>
                            <li>
                                <a className="company" href="/">广汽丰田诚立番禺店</a>
                                <span>&nbsp;&nbsp;</span>
                                <a href="/">机修人员</a>
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Home