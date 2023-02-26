
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";

//auth, google provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

//create context (dont forget to export!)
export const ContextAuth = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    const exitUser = () => {
        return signOut(auth);
    };
                            //why r we doing this? side effect + unsubcribe
    useEffect(() => {
        const release = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            // console.log('state changed', currentUser)
        })
        return () => {
            release();
        }
    }, []);

    return (
        <div>
            <ContextAuth.Provider value={{user, loading, createUser, signIn, signInWithGoogle, exitUser}}>
                {children}
            </ContextAuth.Provider>
        </div>
    );
};

export default UserContext;