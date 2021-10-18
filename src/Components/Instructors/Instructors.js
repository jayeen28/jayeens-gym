import React, { useEffect, useState } from 'react';
import Instructor from './Instructor/Instructor';
import './Instructors.css';
import instructorBanner from '../../images/instructorpagebanner.jpg';

const Instructors = () => {
    const [instructors, setinstructors] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Jayeen29/api-img-jayeens-gym/main/instructors.json')
            .then(res => res.json())
            .then(data => setinstructors(data))
    }, [])
    return (
        <div className="instructors-section">
            <div className="container">
                <div className="instructors-head">
                    <div className="ins-head-left">
                        <h1>Hello we are from Jayeen's Gym</h1>
                    </div>
                    <div className="ins-head-right">
                        <img src={instructorBanner} alt="instructorBanner" />
                    </div>
                </div>
                <div className="instructors">
                    <div className="ins-boxes">
                        {
                            instructors.map(ins => <Instructor instructor={ins} key={ins._id}></Instructor>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructors;