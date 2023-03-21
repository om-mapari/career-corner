import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fb from '../../assets/fb.png'
import link from '../../assets/link.png'
import yt from '../../assets/yt.png'
import inst from '../../assets/inst.png'


const SocialMediaLinks = () => {
    return (
        <Container className="d-flex justify-content-center my-2" >
            <Row>
                <Col md={3} className="text-center">
                    <a href="https://www.facebook.com">
                        <img src={fb} alt="Facebook" />
                    </a>
                </Col>
                <Col md={3} className="text-center">
                    <a href="https://www.linkedin.com/om-mapari">
                        <img src={link} alt="LinkedIn" />
                    </a>
                </Col>
                <Col md={3} className="text-center">
                    <a href="https://www.youtube.com/ommapari">
                        <img src={yt} alt="YouTube" />
                    </a>
                </Col>
                <Col md={3} className="text-center">
                    <a href="https://www.instagram.com/iam_om.m/">
                        <img src={inst} alt="Instagram" />
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default SocialMediaLinks;