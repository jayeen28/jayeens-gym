import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Banner.css';

const Banner = () => {
    const [reviews, setreviews] = useState([]);
    //load banner reviews data
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Jayeen29/jayeens-gym/main/api-img-jayeens-gym/reviews.json')
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [])
    return (
        <div className="container">
            <div className="banner-contents">
                <div className="banner-left">
                    <h1>Don't stop, <br /> till you drop!</h1>
                    <Link to="/contactus">Contact us</Link>
                </div>

                {/* Reviews slider */}
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
    );
};

export default Banner;