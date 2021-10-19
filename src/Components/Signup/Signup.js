import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import googleBtn from '../../images/google-btn.png';

const Signup = () => {
    const { signUp, googleSignIn, } = useAuth();
    const { register, handleSubmit } = useForm();
    //handle on submit
    const onSubmit = ({ email, password, userName }) => {
        signUp(email, password, userName)
    }
    return (
        <div className="signup-page">
            <div className="container">
                <div className="sin-contents">
                    <div className="signup-head">
                        <h1>Sign up</h1>
                    </div>
                    <div className="signup-form">
                        <form onSubmit={handleSubmit(onSubmit)} className="signin-up-form">
                            <input {...register("userName")} className="user-inputs" type="text" placeholder="Name" />
                            <input {...register("email")} className="user-inputs" type="email" id="sp-email" placeholder="Email" />
                            <input {...register("password")} className="user-inputs" type="password" id="sp-password" placeholder="Password" />
                            <input className="user-inputs" type="submit" value="Sign up" />
                            <Link to='/signin'>Alredy registered?</Link>
                            <div className="brand-signin-btns">
                                <div className="google-btn">
                                    <img src={googleBtn} onClick={googleSignIn} alt="googlebtn" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;