import React from 'react';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import './Services.css';
import SrvcBoxes from './SrvcBoxes/SrvcBoxes';

const Services = () => {
    const [services, setservices] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    // load services boxes data
    useEffect(() => {
        fetch('https://blooming-plains-72339.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setservices(data);
                setisLoading(false);
            })
    }, []);
    return (
        <div className="container">
            <div className="services-head">
                <h2 className="text-light">Our Services</h2>
            </div>
            {
                isLoading ? <div style={{ textAlign: 'center' }}>
                    <Spinner animation="grow" />
                </div> :
                    <div className="service-boxes">
                        {
                            services?.map(srvc => <SrvcBoxes service={srvc} key={srvc._id}></SrvcBoxes>)
                        }
                    </div>
            }
        </div>
    );
};

export default Services;