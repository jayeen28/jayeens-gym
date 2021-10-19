import React from 'react';
import './Aboutus.css';
import abtusimage from '../../../images/aboutus.jpg';
const Aboutus = () => {
    return (
        <div className="abt-detail">
            <div className="abt-detail-left">
                <div className="abt-content">
                    <p>
                        Hey there, want to live a healthy and refreshing life? We are professional gym trainer here to guide you. Bring your body to the perfect shape you desire with our nutrition plan specifically designed keeping your personal need in mind. Our target is to make it a habit to build your life fit and healthy.
                    </p>
                </div>
                <div className="abt-skills">
                    <div className="abt-skills-head">
                        <h2>Skills</h2>
                    </div>
                    <div className="abt-skills-ranges">
                        <div className="range">
                            <div className="range-head">
                                <span className="range-name">ORGANIZED</span>
                                <span className="range-percentage">90%</span>
                            </div>
                            <div className="range-bar">
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '90%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="range">
                            <div className="range-head">
                                <span className="range-name">TEACHING</span>
                                <span className="range-percentage">92%</span>
                            </div>
                            <div className="range-bar">
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '92%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="range">
                            <div className="range-head">
                                <span className="range-name">MOTIVATIONAL</span>
                                <span className="range-percentage">75%</span>
                            </div>
                            <div className="range-bar">
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="range">
                            <div className="range-head">
                                <span className="range-name">FRIENDLY</span>
                                <span className="range-percentage">85%</span>
                            </div>
                            <div className="range-bar">
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '85%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="abt-detail-right">
                <div className="abt-img">
                    <img src={abtusimage} alt="aboutusimage" />
                </div>
            </div>
        </div>
    );
};

export default Aboutus;