import React, { createContext, useContext, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import Login from '../components/store/login.jsx';

const auth = getAuth();
const provider = new GoogleAuthProvider();
const AuthContext = createContext([]);

export const useAuthContext = () => useContext(AuthContext)
const AuthContextProvider = ({ children }) => {
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [user, setUser] = useState({});
    const _signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                //const credential = GoogleAuthProvider.credentialFromResult(result);
                //const token = credential.accessToken;
                // The signed-in user info.
                setUser(result.user);
                setIsLoggedin(true);
                setModalVisibility(false);
                // ...
            }).catch((e) => {
                // Handle Errors here.
                let error = {};
                error.Code = e.code;
                error.Message = e.message;
                // The email of the user's account used.
                //const email = e.customData.email;
                // The AuthCredential type that was used.
                //const credential = GoogleAuthProvider.credentialFromError(e);
                let user = { error: error };
                setUser(user);
                // ...
            });
    }
    const _signInWithEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setUser(userCredential.user);
                setIsLoggedin(true);
                setModalVisibility(false);
                // ...
            })
            .catch((e) => {
                let error = {};
                error.Code = e.code;
                error.Message = e.message;
                setUser({ error: error });
                // ..
            });
    }
    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
            setIsLoggedin(false);
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <AuthContext.Provider
            value={{
                isLoggedin,
                setIsLoggedin,
                user,
                setUser,
                _signInWithEmailAndPassword,
                _signInWithGoogle,
                logout,
                modalVisibility,
                setModalVisibility
            }}>
            {children}
            <Login
                show={modalVisibility}
                onHide={() => setModalVisibility(false)}
            />
        </AuthContext.Provider>
    )
}
export default AuthContextProvider