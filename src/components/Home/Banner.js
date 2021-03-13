import React, {Component} from 'react';
import {Container, Row, Col, ButtonGroup, Button} from 'react-bootstrap';
import '../../css/Home/Banner.css'
class Banner extends Component {
    render() {
        return(
            <div className="banner">
                <Container>
                    <Row>
                        <Col>
                        <h1>
                            End of day data analysis and market insights
                        </h1>
                        <p className="content">
                            Easy and intuitive for beginners, and powerful enough  for advanced
                            chartists ___ TradingView has all the charting tools you need to share and view
                            trading ideas. Real-time data and browser-based charts let you do your research
                            from anywhere, since there are no installations or complex setups.
                        </p>
                        </Col>
                        <Col>
                        <ButtonGroup size="lg" className="mb-2">
                            <Button id="launch-chart-btn">Lunch Chart</Button>
                        </ButtonGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Banner;