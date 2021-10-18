import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jayeensGym from '../../../images/Jayeensgymblack.png'
import './Header.css';
const Header = () => {
    return (
        <header className="header-section">
            <Navbar expand="lg" className="nav-section">
                <Container>
                    <Link to='/home'>
                        <div className="jayeensgym-logo">
                            <img src={jayeensGym} alt="JayeensGymLogo" />
                        </div>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <div className="nav-menu">
                                <Link to="/instructors">Instructors</Link>
                                <Link to="/contactus">Contact us</Link>
                            </div>
                            {/* <div className="user-profile">
                                <div className="name-and-picture">
                                    <p>mr jayeen</p>
                                </div>
                                <div className="btn-management">
                                    <button>Log out</button>
                                </div>
                            </div> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;