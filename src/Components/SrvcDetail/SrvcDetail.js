import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './SrvcDetail.css';

const SrvcDetail = () => {
    const [service, setservice] = useState({});
    const { title, description, img } = service;
    const { srvcId } = useParams();
    useEffect(() => {
        fetch(`https://blooming-plains-72339.herokuapp.com/services/${srvcId}`)
            .then(res => res.json())
            .then(data => {
                setservice(data);
            })
    }, [srvcId])

    return (
        <div className="srvc-detail-section">
            <div className="container">
                <div className="srvc-content">
                    <div className="sdtail-left">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <Link to="/contactus">Book service</Link>
                    </div>
                    <div className="sdtail-right">
                        <div className="srvc-img">
                            <img src={img} alt="serviceDetailImage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SrvcDetail;