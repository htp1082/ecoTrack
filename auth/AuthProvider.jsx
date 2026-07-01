import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext()
export const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {

    const [loading,setLoading]= useState(true);
    const [user,setUser]= useState(null)

    const signUpUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // signin user
    const signInUser =(email,password)=>{

        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
      
    }

    // google sign in

    const googleSingInUser =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const signOutUser =()=>{
        setLoading(true)
        return signOut(auth)
    }

    // set up forget password

    const forgetPasswordUser =(email)=>{
        setLoading(true)
        return sendPasswordResetEmail(auth,email)
    }


    // create user email and password

    const registrationUser=(email,password)=>{
        return createUserWithEmailAndPassword (auth,email,password)
    }

    // update profile
   
    const updateProfile=(name,photoUrl)=>{

        const profile ={
            displayName: name,
            photoURL: photoUrl,
        }
        return updateProfile(profile)
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
         signInUser,
         googleSingInUser,
         signUpUser,
         forgetPasswordUser,
         registrationUser,
         
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;