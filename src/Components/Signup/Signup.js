import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import googleBtn from '../../images/google-btn.png';
import { useHistory, useLocation } from 'react-router';

const Signup = () => {
    const { signUp, googleSignIn, errorMsg, setuser, manageSigninError, setisLoading } = useAuth();
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    let location = useLocation();
    const redirect_url = location.state?.from || '/home';

    //handle sign up form submit
    const onSubmit = ({ email, password, userName }) => {
        signUp(email, password, userName, history)
    }
    //handle google sign in 
    const handleGoogeSignIn = () => {
        googleSignIn()
            .then((res) => {
                setuser(res.user);
                history.push(redirect_url);
            })
            .catch(error => {
                manageSigninError(error.message);
                setisLoading(false)
            });
    }

    return (
        <div className="signup-page">
            <div className="container">
                <div className="sin-contents">
                    <div className="signup-head">
                        <h1>Sign up</h1>
                    </div>
                    <div className="signup-form">
                        {/* sign up form */}
                        {/* error message*/} <p style={{ color: 'red' }}>{errorMsg}</p>
                        <form onSubmit={handleSubmit(onSubmit)} className="signin-up-form">
                            <input {...register("userName")} className="user-inputs" type="text" placeholder="Name" />
                            <input {...register("email")} className="user-inputs" type="email" id="sp-email" placeholder="Email" />
                            <input {...register("password")} className="user-inputs" type="password" id="sp-password" placeholder="Password" />
                            <input className="user-inputs" type="submit" value="Sign up" />
                            <Link to='/signin'>Alredy registered?</Link>
                            {/* google button */}
                            <div className="brand-signin-btns">
                                <div className="google-btn">
                                    <img src={googleBtn} onClick={handleGoogeSignIn} alt="googlebtn" />
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