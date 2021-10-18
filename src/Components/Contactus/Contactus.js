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
                        <iframe title="jayeensgym" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.5632957775283!2d-86.77108438496654!3d40.37420656614922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88131b0bbf85b4ef%3A0x85fe1a77ce1845ab!2sThe%20Gym!5e0!3m2!1sen!2sbd!4v1634589012692!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactus;