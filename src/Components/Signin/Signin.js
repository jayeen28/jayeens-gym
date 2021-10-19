import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Signin.css';
const Signin = () => {
    const { signIn } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = ({ email, password }) => {
        signIn(email, password);
    }
    return (
        <div>
            <div className="signin-page">
                <div className="container">
                    <div className="sin-contents">
                        <div className="sign-in-head">
                            <h1>Sign in</h1>
                        </div>
                        <div className="signin-form">
                            <form onSubmit={handleSubmit(onSubmit)} className="signin-up-form">
                                <input {...register("email")} className="user-inputs" type="email" placeholder="Your email" />
                                <input {...register("password")} className="user-inputs" type="password" placeholder="Your password" />
                                <input className="user-inputs" type="submit" value="Sign in" />
                                <Link to='/signup'>New here?</Link>
                            </form>
                            <div className="brand-signin-btns">
                                <div className="google-btn">
                                    {/* <img onClick={googleSignIn} src={googleBtn} alt="googlebtn" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Signin;