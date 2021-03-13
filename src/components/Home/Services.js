import React, { Component } from 'react';
import { Container, Row, Col, Image, Collapse } from 'react-bootstrap';
import '../../css/Home/Services.css'
class Services extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1>Services</h1>
                    <Row>
                        <Col xl={6} md={4}>
                            <Row>
                                <Col className="service-card">
                                    <div className="card-content">
                                        <Image src="/img/Fundamental_icon.svg" rounded />
                                        <p>
                                            Fundamental & Technical Data Analysis
                                        </p>
                                    </div>
                                </Col>
                                <Col className="service-card">
                                    <div className="card-content">
                                        <Image src="/img/Fundamental_icon.svg" rounded />
                                        <p>
                                            Fundamental & Technical Data Analysis
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="service-card">
                                    <div className="card-content">
                                        <Image src="/img/Fundamental_icon.svg" rounded />
                                        <p>
                                            Fundamental & Technical Data Analysis
                                        </p>
                                    </div>
                                </Col>
                                <Col className="service-card">
                                    <div className="card-content">
                                        <Image src="/img/Fundamental_icon.svg" rounded />
                                        <p>
                                            Fundamental & Technical Data Analysis
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col>

                        </Col>
                        <Col>

                        </Col>
                        <Col>

                        </Col>
                    </Row>
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Services;