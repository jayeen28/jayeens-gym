import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#link">Instructor</Nav.Link>
                            <Nav.Link href="#link">Contact us</Nav.Link>
                        </Nav>
                        <Nav>
                            <div className="user-profile">
                                <div className="name-and-picture">
                                    <p>mr jayeen</p>
                                </div>
                                <div className="btn-management">
                                    <button>Log out</button>
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;