import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Signup = () => {
    const { signUp } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = ({ email, password, name }) => {
        signUp(email, password, name);
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
                            <input {...register("name")} className="user-inputs" type="text" placeholder="Name" />
                            <input {...register("email")} className="user-inputs" type="email" id="sp-email" placeholder="Email" />
                            <input {...register("password")} className="user-inputs" type="password" id="sp-password" placeholder="Password" />
                            <input className="user-inputs" type="submit" value="Sign up" />
                            <Link to='/signin'>Alredy registered?</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;