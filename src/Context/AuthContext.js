import { createContext, useContext, useEffect, useState } from "react";
import { firebaseAuth  } from '../config/config'


export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{

    const[user,setUser]=useState(null);
    const[auth,setAuth]=useState(false);
    const[error,setError]=useState("") 

    const signUp=(username,email,password)=>{
     return firebaseAuth.createUserWithEmailAndPassword(email,password).then((res)=>{
        res.user.updateProfile({
            displayName:username
        })
     }).catch((err)=>{
         console.log(err.code);
          switch (err.code) {
              case "auth/email-already-in-use":
                  return setError('email already taken');
              default:
                  return error
          }
        
        }
         
         );
    }

    const login=(email,password)=>{
        return firebaseAuth.signInWithEmailAndPassword(email,password).then((res)=>{
        }).catch((err)=>{
            console.log(err.code);
            switch (err.code) {
                case "auth/wrong-password":
                   return setError("username or password is invalid");
                    
                case "auth/user-not-found":
                   return setError("No user found");
                case "auth/too-many-requests":
                    return setError("please try after sometime");            
                default:
                    return error;
            }
        })
    }

    useEffect(()=>{
       const ejeact= firebaseAuth.onAuthStateChanged((acceptCurrenrChangeUser)=>{
            setUser(acceptCurrenrChangeUser);
            setAuth(true);
        })
        return ejeact
    },[])

    return(
        <AuthContext.Provider value={{
            signUp,
            login,
            user,
            auth,
            error,
            setError
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth=()=>{
    const { signUp,
        login,
        user,
        auth,
        error,
        setError } = useContext(AuthContext);
    return {
        signUp,
        login,
        user,
        auth,
        error,
        setError
    }
}