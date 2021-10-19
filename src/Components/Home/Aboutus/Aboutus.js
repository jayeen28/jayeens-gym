import React from 'react';
import './Aboutus.css';
import abtusimage from '../../../images/aboutus.jpg';
import SkillRanges from './SkillRanges/SkillRanges';
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
                    <SkillRanges></SkillRanges>
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