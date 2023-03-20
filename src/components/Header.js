import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom'; // add this line


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HoverLink from './reusableComp/HoverLink';

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
            <Container>
                <Navbar.Brand >
                    <Link to="/" className="nav-link shadow-lg p-0 bg-body-tertiary rounded">
                        <img
                            src={logo}
                            height="60"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />

                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"> </Nav>
                    <Nav>
                        <HoverLink to="/programs">OUR PROGRAMS</HoverLink>
                        <HoverLink to="/about">OUR STORY</HoverLink>
                        <HoverLink to="/our-brands">OUR BRANDS</HoverLink>
                        <HoverLink to="/initiatives">SOCIAL INITIATIVES</HoverLink>
                        <HoverLink to="/contact-us">CONTACT US</HoverLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;