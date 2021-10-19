import React from 'react';

const SkillRanges = () => {
    return (
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
    );
};

export default SkillRanges;