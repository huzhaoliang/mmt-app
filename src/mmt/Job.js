import $ from 'jquery';
import React from 'react';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';

import './Job.css'


class Job extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            filter: {city: null, company: null, position: null, id: window.location.href.split("=")[1]},
            job: [{
                city:{name:"..."},
                company:{name:"...", contact:"...", description:"...", city:"...", locate:"..."}, 
                id:0, name:"...", exp:"...", edu:"...", number:1, description:"...", startSalary:"...", endSalary:"..."
            }]
        };
    }

    componentDidMount = () => {
        this.filterJob();
    }

    //search job
    filterJob = () =>
    {
        let postfix = this.state.filter.id+"&position="+this.state.filter.position+"&company="+this.state.filter.company+"&city="+this.state.filter.city
        $.ajax({
            async : true,
            type: 'GET',
            url: 'http://localhost:8080/api/jobs?id=' + postfix,
            dataType: 'json',
            contentType: 'application/json;charset=utf-8',
                success: (data) =>
                        {
                            this.setState({job: data});
                        },
                error: (data) =>
                        {   
                            console.log("Call API api/jobs failed in job page!");
                        }
        });
    }

    render() {
        const tmp = this.state.job[0].description;
        // const atmp = "这份工作很不错。\n事少钱多。\n速来";
        const jobPrettyDesciption = tmp.split("\\n");
        const jobDecriptionEles = jobPrettyDesciption.map(
            (decription, index) => {
                return(
                    <p key={index}>{decription}</p>
                );
            }
        );
        return(
            <Container className="job-informations mt-1">
                <Row>
                    <Col sm="8">
                        <div className="job-title mt-5 mb-3">
                            <h2 title={this.state.job[0].name}>{this.state.job[0].name}</h2>
                            {/* <h2>{id}</h2> */}
                        </div>
                        <div className="job-company mb-4">
                            <a href='/' target="_blank" title={this.state.job[0].company.name} className="company-link mr-4"><span>{this.state.job[0].company.name || "为什么没有工作名称"}</span></a>
                            <a href='/' target="_blank" title="查看职位"  className="company-jobs ml-4"><span>查看所有职位</span></a>
                        </div>
                        <div className="job-info">
                            <span className="mr-2">{this.state.job[0].city.name}</span>
                            <span className="mr-2">|</span>
                            <span className="mr-2">{this.state.job[0].company.name}年工作经验</span>
                            <span className="mr-2">|</span>
                            {/* <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span> */}
                            <span className="mr-2">{this.state.job[0].edu}学历</span>
                            <span className="mr-2">|</span>
                            <span className="mr-2">招{this.state.job[0].exp}人</span>
                        </div>
                        <div className="welfare mt-2" hidden>
                            <Badge variant="success" className="mr-3">五险一金</Badge>
                            <Badge variant="success" className="mr-3">加班补助</Badge>
                            <Badge variant="success" className="mr-3">生日福利</Badge>
                            <Badge variant="success" className="mr-3">年底双薪</Badge>
                        </div>
                    </Col>
                    <Col sm="4">
                        <div className="job-salary my-5">
                            <span className="detail-salary text-left mr-5"><strong>{this.state.job[0].startSalary}-{this.state.job[0].endSalary}/月</strong></span>
                            <span className="mr-5"></span>
                            <span className="text-right mr-5">收藏</span>
                        </div>
                        <div className="mt-5">
                            <Button className="rounded-0" type="button" block>申请职位</Button>
                        </div>
                    </Col>
                </Row>
                <hr></hr>
                <div className="job-description">
                    <Badge variant="warning" className="mr-3">&nbsp;</Badge>
                    <h4 className="detail-description d-inline">职位信息</h4>
                    <div className="job-description-detail">{jobDecriptionEles}</div>
                    {/* <p>{this.state.job[0].description}</p> */}
                </div>
                <hr></hr>
                <div className="job-contact">
                    <Badge variant="warning" className="mr-3">&nbsp;</Badge>
                    <h4 className="detail-contact d-inline">联系方式</h4>
                    <p>上班地址：{(this.state.job[0].company.city + this.state.job[0].company.locate) || "请告知在那张表中填写工作详细地址！"}</p>
                    {/* <p>上班地址：{(this.state.job[0].company.city + this.state.job[0].company.locate) === null && "请告知在那张表中填写工作详细地址！"}</p> */}
                </div>
                <hr></hr>
                <div className="job-company">
                    <Badge variant="warning" className="mr-3">&nbsp;</Badge>
                    <h4 className="detail-company d-inline">公司信息</h4>
                    <p>{this.state.job[0].company.description || "请告知在那张表中填写公司信息！"}</p>
                </div>
            </Container>
        );
    }
}

export default Job