import initialAuthentication from "../Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
// firebase initialization
initialAuthentication();
const useFirebase = () => {
    const [user, setuser] = useState({});
    const [error, seterror] = useState('')
    const auth = getAuth();
    const googleAuthProvider = new GoogleAuthProvider();
    //signup user
    const signUp = (email, password, userName) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setuser(res.user);
                updateName(userName);
            })
            .catch((error) => {
                seterror(error.message);
            });
    }
    //update name
    const updateName = (userName) => {
        updateProfile(auth.currentUser, {
            displayName: userName
        }).then(() => {

        }).catch((error) => {
            seterror(error.message);
        });
    }
    //signin user
    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => setuser(res.user))
            .catch(error => seterror(error.message))
    }
    //google signin 
    const googleSignIn = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then((res) => {
                setuser(res.user);
            }).catch((error) => {
                seterror(error.message);
            });
    }
    //user observer
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);
            } else {
                setuser({});
            }
        });
        return () => unsubscribed;
    }, [])
    //sign out user
    const signout = () => {
        signOut(auth)
            .then(() => { setuser({}) })
            .catch(error => seterror(error.message))
    }

    console.log(user)
    console.log(error)
    return {
        signIn,
        googleSignIn,
        signUp,
        signout,
        user,
        error
    }

}
export default useFirebase;