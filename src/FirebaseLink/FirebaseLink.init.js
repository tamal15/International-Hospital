import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseLink.config";

const initialiAuthentication=()=>{
    initializeApp(firebaseConfig);
}

export default initialiAuthentication;