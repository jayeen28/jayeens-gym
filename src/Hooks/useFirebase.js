import initialAuthentication from "../Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";

// firebase initialization
initialAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [error, seterror] = useState('');
    const [errorMsg, seterrorMsg] = useState('');
    const [isLoading, setisLoading] = useState(true);
    const auth = getAuth();
    const googleAuthProvider = new GoogleAuthProvider();
    //manage Sign in error message 
    const manageSigninError = (error) => {
        error.includes('wrong-password') ? seterrorMsg('Your password is incorrect')
            : error.includes('user-not-found') ? seterrorMsg('User not found in database')
                : error.includes('popup-closed-by-user') ? seterrorMsg('Sorry! you have closed the popup')
                    : error.includes('to many failed login attempts') ? seterrorMsg('Too many faild login attempts. Please try again later')
                        : error.includes('6 characters') ? seterrorMsg('Password should be at least 6 characters')
                            : error.includes('invalid-email') ? seterrorMsg('Email address is invalid')
                                : error.includes('missing-email') ? seterrorMsg('Please enter email address')
                                    : seterrorMsg('');
    }
    //

    //signup user
    const signUp = (email, password, userName, history) => {
        createUserWithEmailAndPassword(auth, email, password, userName)
            .then(res => {
                setuser(res.user);
                updateName(userName);
                history?.push('/home');
            })
            .catch((error) => {
                manageSigninError(error.message);
            })
            .finally({});
    }

    //update name
    const updateName = (userName) => {
        setisLoading(true);
        updateProfile(auth.currentUser, {
            displayName: userName
        }).then(() => {
        }).catch((error) => {
            seterror(error.message);
        })
            .finally(() => { setisLoading(false) })
    }

    //signin user
    const signIn = (email, password) => {
        setisLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google signin 
    const googleSignIn = () => {
        setisLoading(true);
        return signInWithPopup(auth, googleAuthProvider)
    }

    //sign out user
    const signout = () => {
        setisLoading(true)
        signOut(auth)
            .then(() => { setuser({}) })
            .catch(error => {
                seterror(error.message);
                setisLoading(false);
            })
    }

    //user observer
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);
            } else {
            }
            setisLoading(false);
        });
        return () => unsubscribed;
    }, [])

    return {
        signIn,
        googleSignIn,
        signUp,
        signout,
        setuser,
        setisLoading,
        updateName,
        seterror,
        manageSigninError,
        error,
        isLoading,
        user,
        errorMsg,
    }

}
export default useFirebase;