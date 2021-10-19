import initialAuthentication from "../Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// firebase initialization
initialAuthentication();
const useFirebase = () => {
    const [user, setuser] = useState({});
    const [error, seterror] = useState('')
    const [isLoading, setisLoading] = useState(true);
    const auth = getAuth();
    const history = useHistory();
    const redirect_url = '/home';
    const googleAuthProvider = new GoogleAuthProvider();
    //signup user
    const signUp = (email, password, userName) => {
        setisLoading(true);
        createUserWithEmailAndPassword(auth, email, password, userName)
            .then(res => {
                setuser(res.user);
                updateName(userName);
                history.push(redirect_url);
            })
            .catch((error) => {
                seterror(error.message);
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
        isLoading,
        user,
        error
    }

}
export default useFirebase;