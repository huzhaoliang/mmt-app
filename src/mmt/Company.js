import React from 'react';
import { Container, Card } from 'react-bootstrap';

import './Company.css'

class Company extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state='';
    }

    render() {
        return(
            <Container className="my-2">
                <Card>
                    <Card.Img className="p-1" variant="top" src="static/img/lg.gif" />
                    <Card.Body>
                        <Card.Title>公司简介</Card.Title>
                        <Card.Text>
                            公司简介：哈尔滨博实自动化股份有限公司，注册资本36000万元，公司主要从事石化化工后处理成套设备的研发、生产、销售及相关技术服务。系列产品已成功并广泛应用于中国石化、中国石油、中化集团、中国海油、中国大唐、神华集团、中盐公司、中粮集团等全国大型企业集团，产品覆盖国内除西藏及港、澳、台之外的所有省区，并成功出口到俄罗斯、哈萨克斯坦、泰国等国家。博实公司成立于1997年9月，2012年9月成功在国内上市，并先后在国内的华东，华北，西北，华南等地建立覆盖全国的服务分支机构，具有突出的技术及发展空间优势。
                            <br></br>
                            目前博实公司开始大力建设华东地区服务中心，业务职能将覆盖华东地区设备以及用户的需求，目前服务中心在上海，宁波镇海，北仑，杭州，宁海，九江，贵溪，鹰潭，衢州，南京，张家港，淮安，嘉兴，铜陵，合肥，蚌埠，连云港，徐州，南通，常州，泰州，镇江等多地都有业务开展。项目数量达300多个。发展空间广阔。服务中心正处于发展壮大时期，期待您的加入在上海服务中心的大舞台能实现自身价值的提高。 
                        </Card.Text>
                        <Card.Title>招聘职位</Card.Title>
                        <Card.Text>
                            <Card.Link href="#" className="p-1">营销专员</Card.Link><br></br>
                            <Card.Link href="#" className="p-1">采购专员</Card.Link>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Title>联系方式</Card.Title>
                        <Card.Text>
                            联 系  人：阮小姐<br></br>
                            电      话：0791-82299162<br></br>
                            通讯地址：南昌市-望城新区江铃大道666号<br></br>
                            邮政编码：330100<br></br>
                            电子邮件：3109599@qq.com, isuzu.zhaopin@jiangxi-isuzu.cn<br></br>
                            公司网址：
                            <Card.Link href="#" className="p-1">http://www.jiangxi-isuzu.cn</Card.Link><br></br>
                        </Card.Text>
                    {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                    </Card.Footer>
                </Card>
                {/* <div className="card my-3">
                    <img className="card-img-bottom" src="img/lg.gif" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div> */}
            </Container>
        );
    }
}

export default Company