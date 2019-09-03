import React from 'react';
import { Form, Button } from 'react-bootstrap';


class HorizontalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const formGroups = this.props.form.map((element, index) => {
            if (element.name === "按钮") {
                return(
                    <Button className="rounded-0"  type={element.type} onClick={element.action}> 
                        {element.message}
                    </Button>
                );
            } else {
                return(
                    <Form.Group controlId={element.type + "_" + index}>
                        {/* <Form.Label>{element.name}</Form.Label> */}
                        <Form.Control className="rounded-0"  type={element.type} placeholder={"请输入" + element.name} />
                    </Form.Group>
                );
            }
        });
        return(
            <Form className="form-inline">
                {formGroups}
            </Form>
        );
    }
}

export default HorizontalForm;