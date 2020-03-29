import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import {
	Container,
	Row,
	Col,
	Button,
	Card,
	CardGroup
	} from 'react-bootstrap';
import logo from '../img/logo.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';


class LandingPage extends Component{

	render(){
		return<div>
			<NavBar/>
			<Container fluid>
				<Row>
					<Col 
						className="text-center"
						>
						<h1 
							className="text-header"
						>
							AppName
						</h1>
						<img
							src={logo}
							className="img-fluid" 
							id="image-logo"
						>
						</img>
					</Col>
				</Row>
				<Row className='welcome-text'>
					<Col></Col>
					<Col sm={8} className='text-center'>
						<h5 
							className="text-header"
						>
							Bienvenido, Appname es una red social donde podras 
							publicar y encontrar contenido acerca de  deportes 
							al aire libre, primero que nada, necesitaremos un 
							breve registro.
						</h5>
					</Col>
					<Col></Col>
				</Row>
				<Row>
					<Col></Col>
						<Col sm={6}>
							<CardGroup>
								<Card className="text-center">
									<Card.Body>
										<Card.Title>Sign up here</Card.Title>
										<Card.Text>
										Your adventure begins here
										</Card.Text>
										<Button
											href='/SignIn'											
											id="btn-sign-in"
										>
										Sign in!
										</Button>
									</Card.Body>
								</Card>
								<Card className="text-center">
									<Card.Body>
										<Card.Title>Log in</Card.Title>
										<Card.Text>
										You are already registered
										</Card.Text>
										<Button   
											id="btn-log-in"
										>
										Log in!
										</Button>
									</Card.Body>
								</Card>
							</CardGroup>
						</Col>
					<Col></Col>
				</Row>
			</Container>
		</div>
	};
};
export default LandingPage;