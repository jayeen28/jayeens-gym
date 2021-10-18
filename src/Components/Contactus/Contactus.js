import React from 'react';
import './Contactus.css';
import { useForm } from 'react-hook-form';

const Contactus = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="contact-us-page">
            <div className="container">
                <div className="contactus-form-contents">
                    <div className="contactus-head">
                        <h1>Contact us</h1>
                    </div>
                    <div className="contact-form">
                        <form onSubmit={handleSubmit(onSubmit)} className="contact-form-fields">
                            <input {...register("name")} placeholder="Your name" className="user-inputs" />
                            <input {...register("email")} placeholder="Your email" type="email" className="user-inputs" />
                            <textarea {...register("message")} placeholder="Your message" type="text" className="user-inputs" rows="5" />
                            <input type="submit" value="Submit" className="user-inputs" />
                        </form>
                    </div>
                </div>
                <div className="google-map">
                    <div className="map-head">
                        <h2>Here we are</h2>
                    </div>
                    <div className="map">
                        <iframe title="jayeensgym" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14599.553206870356!2d90.38467432467125!3d23.822570682452717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6c2ab936b87%3A0xcaa915c4069493be!2sECB%20Chattar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1634590555598!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactus;