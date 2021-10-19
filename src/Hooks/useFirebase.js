import initialAuthentication from "../Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
// firebase initialization
initialAuthentication();
const useFirebase = () => {
    const [user, setuser] = useState({});
    const [error, seterror] = useState('')
    const auth = getAuth();
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
    console.log(user)
    console.log(error)
    return {
        signUp,
        user,
        error
    }

}
export default useFirebase;