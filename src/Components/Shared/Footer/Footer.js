import React from 'react';
import jayeensgymlogo from '../../../images/Jayeensgymblack.png';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarked, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-contents">
                    <div className="footer-brand">
                        <img src={jayeensgymlogo} alt="footerBrand" />
                    </div>
                    <div className="contact-informations">
                        <div className="footer-address">
                            <FontAwesomeIcon icon={faMapMarked} />ECB chattar Dhaka cantonment
                        </div>
                        <div className="footer-call-email">
                            <div className="call">
                                <FontAwesomeIcon icon={faPhoneAlt} />+8801533-995223
                            </div>
                            <div className="email">
                                <FontAwesomeIcon icon={faEnvelope} /> jayeenb@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="social-media">
                        <a href="https://facebook.com">Facebook</a>
                        <a href="https://twitter.com">Twitter</a>
                        <a href="https://linkedin.com">Linked In</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;