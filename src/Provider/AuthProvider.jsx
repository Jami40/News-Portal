import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/FireBase.init";


export const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    // console.log(user)
    const creatUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const LogOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const updatePropile=(updateProp)=>{
        return updateProfile(auth.currentUser,updateProp)

    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        };
    },[])

    const AuthInfo={
        user,
        setUser,
        creatUser,
        LogOut,
        login,
        loading,
        updatePropile

    }
    return <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;