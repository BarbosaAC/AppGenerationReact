import React, { Component, createRef } from 'react';
import NavBar from '../NavBar/NavBar';
import {
	Container,
	Row,
	Col,
    Button,
    Form
	} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {sendDataFormSingIn} from '../../util/request';
import './SignIn.css';

class LogIn extends Component{

    constructor(props){
        super(props);
        this.txtName = createRef();
        this.txtLastName = createRef();
        this.txtEmail = createRef();
        this.txtUserName = createRef();
        this.txtPassword = createRef();
    }

    handleSubmit = (e) => {
/*         const form = e.currentTarget;
        console.log(form);
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        } */
        var name = this.txtName.current.value;
        var lastName = this.txtLastName.current.value;
        var email = this.txtEmail.current.value;
        var userName = this.txtUserName.current.value;
        var password = this.txtPassword.current.value;
        var dataForm ={
            name: name,
            lastName: lastName,
            email: email,
            userName: userName,
            password: password
        };
        e.preventDefault();
        console.log(dataForm);
        sendDataFormSingIn(dataForm);
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
                                                //required 
                                                type="text" 
                                                placeholder="Fist name"
                                                name="fistName"
                                                ref={this.txtName}
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
                                                //required 
                                                type="text" 
                                                placeholder="Last name"
                                                name="lastName"
                                                ref={this.txtLastName}
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
                                                //required 
                                                type="email" 
                                                placeholder="Email"
                                                name="email"
                                                ref={this.txtEmail}
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
                                                //required 
                                                type="text" 
                                                placeholder="User name" 
                                                name="userName"
                                                ref={this.txtUserName}
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
                                                //required 
                                                type="password" 
                                                placeholder="Password" 
                                                name="password"
                                                ref={this.txtPassword}
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Button type="submit">Submit</Button>
                                </Form>
                            </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <label for="btn-login">You are already registered</label>
                            <br/>
                            <Button id="btn-login" href=""> Go to log in!</Button>
                        </Col>
                    </Row>
                </Container>
        </div>
    };
};
export default LogIn;