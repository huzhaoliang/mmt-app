import React from 'react';
import { Container, Image } from 'react-bootstrap';

import './Footer.css'

class Footer extends React.Component
{
    render() {
        return(
            <Container className="bottom-footer my-5">
                <footer className="text-muted">
                    <dl className="text-center">
                        <dd>
                            <p className="dial-number">客服热线：400 6288 266</p>
                            <p>深圳市万泉河科技股份有限公司 © 版权所有&nbsp;&nbsp;ICP No:粤B2-20050572&nbsp;&nbsp;粤ICP备08034547号</p>
                        </dd>
                        <dd>
                            <Image src="img/sznet110.gif" alt="网安" />
                            <Image src="img/police.gif" alt="公安" />
                        </dd>
                    </dl>
                    
                </footer>
            </Container>
        );
    }
}

export default Footer