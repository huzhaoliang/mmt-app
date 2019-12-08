import React from 'react';
import { useParams, useLocation } from "react-dom";
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';

import './Job.css'


class Job extends React.Component
{
    render() {
        // let id = useParams();
        // console.log(id);
        let url = window.location.href;
        console.log(url);
        return(
            <Container className="job-informations mt-1">
                <Row>
                    <Col sm="8">
                        <div className="job-title mt-5 mb-3">
                            <h2 title="模具设计师">模具设计师</h2>
                            {/* <h2>{id}</h2> */}
                        </div>
                        <div className="job-company mb-4">
                            <a href='/' target="_blank" title="江西五十铃" className="company-link mr-4"><span>江西五十铃汽车股份有限公司</span></a>
                            <a href='/' target="_blank" title="查看职位"  className="company-jobs ml-4"><span>查看所有职位</span></a>
                        </div>
                        <div className="job-info">
                            <span className="mr-2">上海市-徐汇区</span>
                            <span className="mr-2">|</span>
                            <span className="mr-2">3年工作经验</span>
                            <span className="mr-2">|</span>
                            {/* <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span> */}
                            <span className="mr-2">本科学历</span>
                            <span className="mr-2">|</span>
                            <span className="mr-2">招2人</span>
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
                            <span className="detail-salary text-left mr-5"><strong>8000-10000/月</strong></span>
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
                    
                </div>
                <hr></hr>
                <div className="job-contact">
                    <Badge variant="warning" className="mr-3">&nbsp;</Badge>
                    <h4 className="detail-contact d-inline">联系方式</h4>
                </div>
                <hr></hr>
                <div className="job-company">
                    <Badge variant="warning" className="mr-3">&nbsp;</Badge>
                    <h4 className="detail-company d-inline">公司信息</h4>
                </div>
            </Container>
        );
    }
}

export default Job