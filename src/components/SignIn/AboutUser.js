import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import {
	Container,
	Row,
	Col,
    Button,
    Form,
	} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUser.css';

class AboutUser extends Component{

    render(){
		return<div>
			<NavBar/>
            <Container fluid>
                    <Row>
                        <Col></Col>
                            <Col 
                                className="text-center"
                                sm="5"
                            >
                                <h2 id="title">About you</h2>
                                <img 
                                    className="image-fluid"
                                    id="profile-photo" 
                                    src="" 
                                    alt="profile-photo"
                                >
                                </img>
                                <Form>
                                    <Form.File 
                                        id="custom-file"
                                        label="Custom file input"
                                        custom
                                    />
                                </Form>
                            </Col>  
                        <Col></Col>                  
                    </Row>
                    <Row>
                        <Col></Col> 
                        <Col
                            className="text-left"
                            sm="5"
                        >
                            <h4>Description</h4>
                            <textarea rows={8} cols={54}
                            placeholder="Help us to know a little more about you ... 
                            You can start by telling us
                            Who are you?
                            What do you like?">
                            </textarea>
                        </Col> 
                        <Col></Col> 
                    </Row>
            </Container>
        </div>
    };
};
export default AboutUser;
