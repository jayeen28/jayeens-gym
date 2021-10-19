import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './Home.css';
const Home = () => {
    const [services, setservices] = useState([]);
    const [reviews, setreviews] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Jayeen29/api-img-jayeens-gym/main/servicesData.json')
            .then(res => res.json())
            .then(data => setservices(data))
    }, []);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Jayeen29/api-img-jayeens-gym/main/reviews.json')
            .then(res => res.json())
            .then(data => setreviews(data))
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
                            <div className="banner-right-head">
                                <h3>Reviews</h3>
                            </div>
                            <div className="reviews-carousel">
                                <Carousel indicators={false} controls={false} pause={false}>
                                    {/* I tried to put this on a component but it was giving a ref error */}
                                    {reviews.map(rev =>
                                        <Carousel.Item key={rev._id} className="rev-item">
                                            <div className="carousel-img">
                                                <img src={rev.img} alt="carouselImage" />
                                            </div>
                                            <div className="carousel-contents">
                                                <h5>{rev.name}</h5>
                                                <p>{rev.review}</p>
                                                <span className="review-time">-{rev.time}</span>
                                            </div>
                                        </Carousel.Item>)}
                                </Carousel>
                            </div>
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
            {/* Book trainer section */}
            <div className="bookinstructor-section">
                <div className="container">
                    <div className="bi-contents">
                        <h2>Let's do <br /> this!</h2>
                        <Link to="/instructors">Book an instructor</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;