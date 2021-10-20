import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link to='/contactus'>Book now</Link>
            </div>
        </div>
    );
};

export default Instructor;