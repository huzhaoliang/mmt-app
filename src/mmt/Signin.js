import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col sm="6">
                        <Form>
                            <Form.Group controlId="singinEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="singinPassword">
                                <Form.Label>Enter password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="singinChecbox">
                                <Form.Check type="checkbox" label="记住我的账号" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                登 录
                            </Button>
                        </Form>
                    </Col>
                    <Col sm="6">
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Signin;