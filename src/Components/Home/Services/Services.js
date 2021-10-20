import React from 'react';
import { useEffect, useState } from 'react';
import './Services.css';
import SrvcBoxes from './SrvcBoxes/SrvcBoxes';

const Services = () => {
    const [services, setservices] = useState([]);

    // load services boxes data
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Jayeen29/api-img-jayeens-gym/main/servicesData.json')
            .then(res => res.json())
            .then(data => setservices(data))
    }, []);
    return (
        <div className="container">
            <div className="services-head">
                <h2 className="text-light">Our Services</h2>
            </div>
            <div className="service-boxes">
                {
                    services?.map(srvc => <SrvcBoxes service={srvc} key={srvc.id}></SrvcBoxes>)
                }
            </div>
        </div>
    );
};

export default Services;