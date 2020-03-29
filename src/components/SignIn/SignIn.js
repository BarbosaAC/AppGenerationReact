import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import {
	Container,
	Row,
	Col,
    Button,
    Form
	} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';

class LogIn extends Component{

    constructor(props){
        super(props);
    }

    handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
      };

    render(){
        return <div>
                <NavBar/>
                <Container fluid>
                    <Row>
                        <Col></Col>
                            <Col
                                sm="5" 
                                className="text-left spaceTop"
                            >
                                <h2>Sign in</h2>
                            </Col>  
                        <Col></Col>                  
                    </Row>
                    <Row>
                        <Col></Col>
                            <Col sm="5"
                                className="text-center formLogIn"
                            >
                                <Form
                                    onSubmit={this.handleSubmit}
                                    /* action="https://enw9vhdb8fkji.x.pipedream.net"
                                    method="post" */
                                >
                                    <Form.Group 
                                        as={Row} 
                                        className="text-center"
                                        controlId="validationCustom01"
                                        >
                                        <Form.Label column sm="3">
                                            Fist name
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control 
                                                required 
                                                type="text" 
                                                placeholder="Fist name"
                                                name="fistName"
                                            />        
                                        </Col>
                                    </Form.Group>
                                    <Form.Group 
                                        as={Row}
                                        className="text-center"
                                        controlId="validationCustom02"
                                        >
                                        <Form.Label column sm="3">
                                            Last name
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control 
                                                required 
                                                type="text" 
                                                placeholder="Last name"
                                                name="lastName"
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group 
                                        as={Row}
                                        className="text-center"
                                        controlId="validationCustom03"
                                        >
                                        <Form.Label column sm="3">
                                            Email
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control 
                                                required 
                                                type="email" 
                                                placeholder="Email"
                                                name="email"
                                            />
                                        </Col>
                                    </Form.Group> 
                                    <Form.Group 
                                        as={Row}
                                        className="text-center"                                    
                                        controlId="validationCustom04"
                                        >
                                        <Form.Label column sm="3">
                                            User name
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control 
                                                required 
                                                type="text" 
                                                placeholder="User name" 
                                                name="userName"
                                            />
                                        </Col>
                                    </Form.Group> 
                                    <Form.Group 
                                        as={Row}
                                        className="text-center" 
                                        controlId="validationCustom05"
                                        >
                                        <Form.Label column sm="3">
                                            Password
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control 
                                                required 
                                                type="password" 
                                                placeholder="Password" 
                                                name="password"
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Button type="submit">Submit</Button>
                                </Form>
                            </Col>
                        <Col></Col>
                    </Row>
                </Container>
        </div>
    };
};
export default LogIn;