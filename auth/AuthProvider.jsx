import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.config';


export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [loading,setLoading]= useState(true);
    const [user,setUser]= useState(null)

    const signOutUser =()=>{
        loading(true)
        return signOut(auth)
    }

    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth,(current)=>{
            setUser(current);
            setLoading(false)
        })

        return ()=> unsubscribe()

    },[])

    const authInfo ={
         signOutUser,
         user,
         loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;