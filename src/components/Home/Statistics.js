import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../css/Home/Statistics.css';
//id="statistics-container"
class Statistics extends Component {
    render() {
        return (
            <div className="statistics">
                <Container fluid id="statistics-container-fluid">
                    <Container id="statistics-container">
                        <Row>
                            <Col>
                                <Image src="/img/Country_icon_big.svg"></Image>
                            </Col>
                            <Col>
                                <Image src="/img/Exchange_icon_big.svg"></Image>
                            </Col>
                            <Col>
                                <Image src="/img/Data For_icon_big.svg"></Image>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default Statistics;