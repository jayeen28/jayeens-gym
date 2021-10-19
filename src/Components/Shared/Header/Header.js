import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import jayeensGym from '../../../images/Jayeensgymblack.png'
import './Header.css';
const Header = () => {
    const { user, signout, isLoading } = useAuth();
    if (isLoading) { return <Spinner animation="grow" /> }
    console.log(user)
    return (
        <header className="header-section">
            <Navbar expand="lg" className="nav-section">
                <Container>
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
                                {user.email ? <button className="nav-button" onClick={() => { signout() }} >Sign out</button> :
                                    <span>
                                        <Link to="/signin" className="nav-button">Sign in</Link>
                                        <Link to="/signup" className="nav-button">Sign up</Link>
                                    </span>}
                            </div>
                            <div className="profile-content">
                                {user.displayName && <div className="profile-name">{user.displayName}</div>}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;