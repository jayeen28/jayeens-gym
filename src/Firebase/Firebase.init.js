import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
// Initialize Firebase
const initialAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initialAuthentication;