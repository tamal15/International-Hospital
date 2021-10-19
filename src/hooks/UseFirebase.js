import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged ,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initialiAuthentication from "../FirebaseLink/FirebaseLink.init";

initialiAuthentication()
const useFirebase=()=>{
    const [user,setUser]=useState({})

    const auth = getAuth();
    const Googleprovider = new GoogleAuthProvider();

    const GoogleLogin=()=>{
     return signInWithPopup(auth, Googleprovider)
        // .then(result=>{
        //     console.log(result.user)
        //     setUser(result.user);
        // })
    }

    useEffect(()=>{
        onAuthStateChanged (auth,user=>{
            if(user){
                setUser(user)
            }
        })
    },[])

    const logout=()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }


    
    return{
        user,
        GoogleLogin,
        logout
    }
}
export default useFirebase;