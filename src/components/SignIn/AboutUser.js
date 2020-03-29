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
import './AboutUser.css';

class AboutUser extends Component{

    render(){
		return<div>
			<NavBar/>
            <Container fluid>
                    <Row>
                        <Col></Col>
                            <Col sm="5">
                                <h2>About you</h2>
                            </Col>  
                        <Col></Col>                  
                    </Row>
            </Container>
        </div>
    };
};
export default AboutUser;
