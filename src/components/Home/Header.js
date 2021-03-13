import React, { Component } from 'react';
import "../../css/Home/Header.css";
import { Container, Row, Col, Nav, Link, Navbar, NavItem } from 'react-bootstrap';
import GlobalSearch from './GlobalSearch';
class Header extends Component {
    render() {
        return (
            <div className="header">
                {/* <Container id="header-container"> */}
                    <Row>
                        <Col id="brand">
                            stockdataguid
                        </Col>
                        <Col md="auto" id="search">
                            <GlobalSearch />
                        </Col>
                        <Col>
                            <div className="language">
                                EN
                            </div>
                        </Col>
                        <Col>
                            <div className="signIn-freetrial ">
                                <Nav.Link href="#" className="sign-in">Sign In/</Nav.Link>
                                <Nav.Link href="#" className="trial">Start free trial</Nav.Link>
                            </div>
                        </Col>
                    </Row>
                {/* </Container> */}
                <Navbar>
                    <div className="nav-links">
                        <Nav className="mr-auto">
                            <Nav.Link id="market-link" href="#hom">Market</Nav.Link>
                            <Nav.Link id="services-link" href="#features">Services</Nav.Link>
                            <Nav.Link id="chart-link" href="#pricing">Chart</Nav.Link>
                            <Nav.Link id="sub-link" href="#features">Subscription</Nav.Link>
                            <Nav.Link id="contact-link" href="#pricing">Contact Us</Nav.Link>
                        </Nav>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;