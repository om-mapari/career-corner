import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom'; // add this line


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
            <Container>
                <Navbar.Brand >
                    <Link to="/" className="nav-link">
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
                        <Link to="/programs" className="nav-link">OUR PROGRAMS</Link>
                        <Link to="/about" className="nav-link">OUR STORY</Link>
                        <Link to="/our-brands" className="nav-link">OUR BRANDS</Link>
                        <Link to="/initiatives" className="nav-link">SOCIAL INITIATIVES</Link>
                        <Link to="/contact-us" className="nav-link">CONTACT US</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;