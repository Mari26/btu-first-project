
import { useState } from "react";
import { createContext, useContext } from 'react';

const AuthContext = createContext({
    user:null,
    login:()=>{},
    logout:()=>{}
});
 export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const login=()=>{
        setUser({name:'mari'});
    }
    const logout=()=>{
        setUser(null);
    }
    const value={
        user,
        login,
        logout
    }
   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
 }


 export const useAuth = () => {
  return useContext(AuthContext);
};