import $ from 'jquery';
import React from 'react';
import { Container, Carousel, Row, Col, Image, CardDeck, Card } from 'react-bootstrap';

import './Home.css'
import HorizontalForm from './HorizontalForm.js'

class Home extends React.Component
{
 
    constructor(props)
    {
        super(props);
        this.state = {};
        
    }
 
    render(){
        let hot_jobs = this.hotJobs();
        const searchBox = {
            form:[
                {name:"城市", type:"text"}, 
                {name:"公司", type:"text"},
                {name:"职位", type:"text"},
                {name:"按钮", type:"submit", message:"搜 索", action:this.searchBox}
            ]
        };
        return(
            <Container className="mt-1">
                <SingleCarousel />
                <div className="my-4">
                    <HorizontalForm {...searchBox}/>
                </div>
                <JobCard hotJobs={hot_jobs} />
                <div className="my-2">
                    <a href="/"><Image className="w-100" src="static/img/index2.gif" alt="First slide" fluid/></a>
                </div>
                <Row className="my-2">
                    <Col>
                        <a href="/"><Image className="w-100" src="static/img/index1.gif" alt="First slide"/></a>
                    </Col>
                    <Col>
                        <a href="/"><Image className="w-100" src="static/img/index1.gif" alt="First slide"/></a>
                    </Col>
                </Row>
                <div className="jobTable my-2">
                    {/* <JobTable /> */}
                    {/* <Table borderless className="my-0">
                        <tbody>
                        </tbody>
                    </Table> */}
                </div>
            </Container>
        );
    }

    componentDidMount=()=>
    {

    }

    componentWillUnmount=()=>
    {

    }

    //below is for api 
    hotJobs = () =>
    {
        let hotJobs = "";
        $.ajax({
                async : false,
                type: 'GET',
                url: 'http://localhost:8080/api/hotJobs',
                dataType: 'json',
                contentType: 'application/json;charset=utf-8',
                success: (data) =>
                        {
                            hotJobs = data;
                        },
                error: (data) =>
                        {   
                            console.log("Fail to get hot jobs!");
                        }
        });
        return hotJobs;
    }
    //search job
    searchJob = () =>
    {
        $.ajax({
            async : false,
            type: 'GET',
            url: 'http://localhost:8080/api/searchJobs'
        });
    }

}

function SingleCarousel() {
    return(
        <Carousel>
            <Carousel.Item>
                <a href="/">
                    <img className="d-block w-100" src="static/img/carousel1.jpg" alt="First slide"/>
                </a>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href="/">
                    <img className="d-block w-100" src="static/img/carousel2.jpg" alt="second slide"/>
                </a>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href="/">
                    <img className="d-block w-100" src="static/img/carousel3.jpg" alt="Third slide"/>
                </a>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

function JobCard(props) {
    return(
        <CardDeck>
            <Card>
                <Card.Link href="#" className="p-1">
                    <Card.Img variant="top" src="static/img/index3.jpg" />
                </Card.Link>
                <Card.Body>
                    <Card.Title>
                        <Card.Link href="#">{props.hotJobs[0][1]}</Card.Link>
                    </Card.Title>
                    <Card.Text>
                        <strong>
                            <span className="salary">{props.hotJobs[0][4]}-{props.hotJobs[0][5]}</span>
                            <span>&nbsp;&nbsp;</span>
                        </strong>
                            <span>经验</span>
                            <span>{props.hotJobs[0][2]}</span>
                            <span>年</span>
                            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                            <span>{props.hotJobs[0][3]}</span>
                        {/* <div className="mt-1">
                            <Badge variant="success" className="mr-1">五险一金</Badge>
                            <Badge variant="success" className="mr-1">加班补助</Badge>
                            <Badge variant="success" className="mr-1">生日福利</Badge>
                            <Badge variant="success" className="mr-1">年底双薪</Badge>
                        </div> */}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Link href="#" className="text-muted">查看详情...</Card.Link>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Link href="#" className="p-1">
                    <Card.Img variant="top" src="static/img/index3.jpg" />
                </Card.Link>
                <Card.Body>
                    <Card.Title>
                        <Card.Link href="#">{props.hotJobs[1][1]}</Card.Link>
                    </Card.Title>
                    <Card.Text>
                        <strong>
                            <span className="salary">{props.hotJobs[1][4]}-{props.hotJobs[1][5]}</span>
                            <span>&nbsp;&nbsp;</span>
                        </strong>
                            <span>经验</span>
                            <span>{props.hotJobs[1][2]}</span>
                            <span>年</span>
                            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                            <span>{props.hotJobs[1][3]}</span>
                        {/* <div className="mt-1">
                            <Badge variant="success" className="mr-1">五险一金</Badge>
                            <Badge variant="success" className="mr-1">加班补助</Badge>
                            <Badge variant="success" className="mr-1">生日福利</Badge>
                            <Badge variant="success" className="mr-1">年底双薪</Badge>
                        </div> */}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Link href="#" className="text-muted">查看详情...</Card.Link>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Link href="#" className="p-1">
                    <Card.Img variant="top" src="static/img/index3.jpg" />
                </Card.Link>
                <Card.Body>
                    <Card.Title>
                        <Card.Link href="#">{props.hotJobs[2][1]}</Card.Link>
                    </Card.Title>
                    <Card.Text>
                        <strong>
                            <span className="salary">{props.hotJobs[2][4]}-{props.hotJobs[2][5]}</span>
                            <span>&nbsp;&nbsp;</span>
                        </strong>
                            <span>经验</span>
                            <span>{props.hotJobs[2][2]}</span>
                            <span>年</span>
                            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                            <span>{props.hotJobs[2][3]}</span>
                        {/* <div className="mt-1">
                            <Badge variant="success" className="mr-1">五险一金</Badge>
                            <Badge variant="success" className="mr-1">加班补助</Badge>
                            <Badge variant="success" className="mr-1">生日福利</Badge>
                            <Badge variant="success" className="mr-1">年底双薪</Badge>
                        </div> */}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Link href="#" className="text-muted">查看详情...</Card.Link>
                </Card.Footer>
            </Card>
        </CardDeck>
    );
}

// function JobTable() {
//     return(
//         <Table borderless className="my-0">
//             <tbody>
//                 {getTableRow()}
//                 {/* $.each(this.state.common_job, ()=>{console.log(this.state.common_job[1])})) */}
//             </tbody>
//         </Table>
//     );
// }


// function getTableRow() {
//     return(
//         <tr>
//             <td>
//                 <ul className="my-0">
//                     <li>
//                         <a className="company" href="/">深圳市新力达汽车贸易有限公司</a>
//                         <span>&nbsp;&nbsp;</span>
//                         <a href="/">服务顾问</a>
//                     </li>
//                 </ul>
//             </td>
//             <td>
//                 <ul className="my-0">
//                     <li>
//                         <a className="company" href="/">深圳市标鹏汽车有限公司</a>
//                         <span>&nbsp;&nbsp;</span>
//                         <a href="/">销售顾问</a>
//                     </li>
//                 </ul>
//             </td>
//             <td>
//                 <ul className="my-0">
//                     <li>
//                         <a className="company" href="/">广汽丰田诚立番禺店</a>
//                         <span>&nbsp;&nbsp;</span>
//                         <a href="/">机修人员</a>
//                     </li>
//                 </ul>
//             </td>
//         </tr>
//     );
// }


export default Home