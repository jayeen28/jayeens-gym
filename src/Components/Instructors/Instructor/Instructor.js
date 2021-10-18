import React from 'react';
import './Instructor.css';
const Instructor = ({ instructor }) => {
    const { name, img, adrs, salary } = instructor;
    return (
        <div className="instructor-box">
            <div className="ins-box-img">
                <img src={img} alt="instructorImage" />
            </div>
            <div className="ins-information">
                <h5>{name}</h5>
                <p>Address: {adrs}</p>
                <p>Salary: {salary}</p>
            </div>
        </div>
    );
};

export default Instructor;