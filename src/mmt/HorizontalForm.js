import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

// import './HorizontalForm.css'

class HorizontalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const formGroups = this.props.form.map((element, index) => {
            if (element.name === "按钮") {
                return(
                    <Col>
                        <Button className="rounded-0"  type={element.type} onClick={element.action} block> 
                            {element.message}
                        </Button>
                    </Col>
                );
            } else {
                return(
                    <Col>
                        {/* <Form.Label>{element.name}</Form.Label> */}
                        <Form.Control className="rounded-0"  type={element.type} placeholder={"请输入" + element.name} />
                    </Col>
                );
            }
        });
        return(
            <Form>
                <Form.Row>
                    {formGroups}
                </Form.Row>
            </Form>
            
            // <Form className="form-inline">
            //     {formGroups}
            // </Form>
        );
    }
}

export default HorizontalForm;