import { faSignInAlt, faSignOutAlt, faUserAstronaut, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, Navbar, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import jayeensGym from '../../../images/Jayeensgymblack.png'
import './Header.css';
const Header = () => {
    const { user, signout, isLoading } = useAuth();
    if (isLoading) { return <Spinner animation="grow" /> }
    return (
        <header className="header-section">
            <div className="container">
                <Navbar expand="lg" className="nav-section">
                    <Link to='/home'>
                        <div className="jayeensgym-logo">
                            <img src={jayeensGym} alt="JayeensGymLogo" />
                        </div>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className="header-nav">
                            <div className="nav-menu">
                                <Link to="/instructors">Instructors</Link>
                                <Link to="/contactus">Contact us</Link>
                            </div>
                            <div className="nav-buttons">
                                {user.email ? <button className="nav-button" onClick={() => { signout() }} ><FontAwesomeIcon icon={faSignOutAlt} /> Sign out</button> :
                                    <span>
                                        <Link to="/signin" className="nav-button"><FontAwesomeIcon icon={faSignInAlt} /> Sign in</Link>
                                        <Link to="/signup" className="nav-button"><FontAwesomeIcon icon={faUserPlus} /> Sign up</Link>
                                    </span>}
                            </div>
                            <div className="profile-content">
                                {user.displayName && <div className="profile-name"><FontAwesomeIcon icon={faUserAstronaut} /> {user.displayName}</div>}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    );
};

export default Header;