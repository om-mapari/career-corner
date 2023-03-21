import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FocusArea = ({ Image, Information }) => {
    return (
        <div
            style={{
                margin: '20px',
                padding: '10px',
                border: '1px solid black'
            }}
        >
            <Container className=''>
                <Row>
                    <Col md={6}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img width={"60%"} src={Image} alt="example" style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.25)', padding: '20px' }} />
                        </div>
                    </Col>
                    <Col md={6}>
                        <p>{Information}</p>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default FocusArea;
