import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import auth from "./firebase.config";
import { useEffect } from "react";

export const AuthContext=createContext(null)
const Authprovider = ({children}) => {
const[user,setUser]=useState(null)
const[loading,setLoading]=useState(true)




const createUser=(email,password)=>{
setLoading(true)
    return  createUserWithEmailAndPassword(auth,email,password)
   


 };



 const singInUser=(email,password)=>{
  setLoading(true)
   return signInWithEmailAndPassword(auth,email,password)
 };
 const forgetPass=(email)=>{
  setLoading(true)
  sendPasswordResetEmail(auth,email)
 }



const logOutUser=()=>{
  setLoading(true)
    return signOut(auth)
 };





  useEffect(()=>{
  const unSubscribe= onAuthStateChanged(auth,currentUser=>{
 console.log('here is current user',currentUser)
 setUser(currentUser)
 setLoading(false)
});
return ()=>{
    unSubscribe();
} 
 
 },[])







const authValues={user,createUser,logOutUser,singInUser,forgetPass,loading}



    return (
       <AuthContext.Provider value={authValues}>

         {children}

       </AuthContext.Provider>
            
        
    );
};

export default Authprovider;