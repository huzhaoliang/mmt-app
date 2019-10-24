import React from 'react';
import { Form, Button } from 'react-bootstrap';


class MMTForm extends React.Component {
    render() {
        const formGroups = this.props.form.map((element, index) => {
            if (element.type === "checkbox" || element.type === "radio") {
                return(
                    <Form.Group controlId={element.id} key={index}>
                        <Form.Check type={element.type} label={element.message} />
                    </Form.Group>
                );
            } else if (element.name === "按钮") {
                return(
                    <Button size="lg" block type={element.type} onClick={element.action} key={index}> 
                        {element.message}
                    </Button>
                );
            } else {
                return(
                    <Form.Group controlId={element.id} key={index}>
                        <Form.Label>{element.name}</Form.Label>
                        <Form.Control type={element.type} placeholder={"请输入" + element.name} />
                    </Form.Group>
                );
            }
        });
        return(
            <Form>
                {formGroups}
            </Form>
        );
    }
}

export default MMTForm;