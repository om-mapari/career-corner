import logo from '../assets/logo.jpg';
import { Link, useLocation } from 'react-router-dom'; // add this line


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HoverNavLink from './HomeSubComponents/HoverNavLink';

function CollapsibleExample() {
    const location = useLocation();

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
                    <Nav className=''>
                        <HoverNavLink to="/programs" isActive={location.pathname === '/programs'}  >OUR PROGRAMS</HoverNavLink>
                        <HoverNavLink to="/about" isActive={location.pathname === '/about'}  >OUR STORY</HoverNavLink>
                        <HoverNavLink to="/our-brands" isActive={location.pathname === '/our-brands'}  >OUR BRANDS</HoverNavLink>
                        <HoverNavLink to="/initiatives" isActive={location.pathname === '/initiatives'}  >SOCIAL INITIATIVES</HoverNavLink>
                        <HoverNavLink to="/contact-us" isActive={location.pathname === '/contact-us'}>CONTACT US</HoverNavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;