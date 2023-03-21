import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const addressData = [
        {
            info1: FaMapMarkerAlt,
            info2: "Address",
            info3: "402 - UTSAV Apartments Laxman Nagar, Baner, Pune, Maharashtra 411045"
        },
        {
            info1: FaPhone,
            info2: "Phone",
            info3: "72766-30705"
        },
        {
            info1: FaEnvelope,
            info2: "Email",
            info3: "admin@merito.in"
        }
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ name, email, subject, message });
        // Add code to submit form data
    };


    return (
        <Container fluid>
            <Row>
                <Col md={6}>
                    {addressData.map((el) => {
                        return (
                            <div key={el.info2} className="d-flex align-items-md-start mb-4">
                                <el.info1 size={25} className="mr-3" />
                                <div className="px-3">
                                    <h5>{el.info2}</h5>
                                    <p>{el.info3}</p>
                                </div>
                            </div>
                        );
                    })}
                </Col>
                <Col md={6}>
                    <h2 className="mb-4">SEND A MESSAGE</h2>
                    <p className="mb-4">Reach out to us with your query and we will get back to you shortly</p>
                    <Form className='pb-5' onSubmit={handleSubmit}>
                        <Form.Group className='py-1' controlId="formName">
                            <Form.Label style={{ fontWeight: "bold", color: "#007bff" }}>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name*" required
                                style={{ borderRadius: "0", border: "none", borderBottom: "1px solid rgba(0,0,0,.2)" }}
                                value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='py-1' controlId="formEmail">
                            <Form.Label style={{ fontWeight: "bold", color: "#007bff" }}>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email*" required
                                style={{ borderRadius: "0", border: "none", borderBottom: "1px solid rgba(0,0,0,.2)" }}
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='py-1' controlId="formSubject">
                            <Form.Label style={{ fontWeight: "bold", color: "#007bff" }}>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Subject*" required
                                style={{ borderRadius: "0", border: "none", borderBottom: "1px solid rgba(0,0,0,.2)" }}
                                value={subject} onChange={(e) => setSubject(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='py-1' controlId="formMessage">
                            <Form.Label style={{ fontWeight: "bold", color: "#007bff" }}>Message</Form.Label>
                            <Form.Control as="textarea" rows={2} placeholder="Message*" required
                                style={{ borderRadius: "0", border: "none", borderBottom: "1px solid rgba(0,0,0,.2)", resize: "none" }}
                                value={message} onChange={(e) => setMessage(e.target.value)} />
                        </Form.Group>
                        <Button className='mt-3' variant="primary" type="submit" style={{ borderRadius: "0", backgroundColor: "#007bff", borderColor: "#007bff" }}>Submit</Button>
                    </Form>
                </Col>
            </Row>





        </Container>
    );
}

export default Contact;
