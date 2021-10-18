import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './Home.css';
const Home = () => {
    const [services, setservices] = useState();
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Jayeen29/api-img-jayeens-gym/main/servicesData.json')
            .then(res => res.json())
            .then(data => setservices(data))
    }, [])
    return (
        <main>
            {/* banner-section */}
            <div className="banner-section">
                <div className="container">
                    <div className="banner-contents">
                        <div className="banner-left">
                            <h1>Don't stop, <br /> till you drop!</h1>
                            <Link to="/contactus">Contact us</Link>
                        </div>
                        <div className="banner-right">
                            <h1>gym gym</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* services section */}
            <div className="services-section">
                <div className="container">
                    <div className="services-head">
                        <h2 className="text-light">Our Services</h2>
                    </div>
                    <div className="service-boxes">
                        {
                            services?.map(srvc => <Service service={srvc} key={srvc.id}></Service>)
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;