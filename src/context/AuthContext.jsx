import React, { useContext, useEffect, useState } from 'react'
// import { auth } from '../firebase.js'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.js'


const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        });
        return unsubscribe
    }, [])
    
    const value = {
        currentUser,
        signUp
    }

  return (
   <AuthContext.Provider value={value}>
        {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider