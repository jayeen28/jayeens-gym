import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aboutus from './Aboutus/Aboutus';
import './Home.css';
import Service from './Service/Service';
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
            <div className="conainer">
                {/* banner-section */}
                <section className="banner-section">
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
                </section>
                {/* services section */}
                <section className="services-section">
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
                </section>
                {/* Book trainer section */}
                <section className="bookinstructor-section">
                    <div className="container">
                        <div className="bi-contents">
                            <h2>Let's do <br /> this!</h2>
                            <Link to="/instructors">Book an instructor</Link>
                        </div>
                    </div>
                </section>
                {/* about us section */}
                <section className="aboutus-section">
                    <div className="container">
                        <div className="abt-contents">
                            <div className="abt-head">
                                <h2>About us</h2>
                                <h5>We will make you turn your Fat into Fit!</h5>
                            </div>
                            <Aboutus />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Home;