import React, { useState } from "react";
import AuthContext from "./AuthContext";


const AuthProvider=(props)=>{
  const initialToken=localStorage.getItem('token');

const [token,setToken]=useState(initialToken);

const userIsLoggedIn=!!token;

const loginHandler=(token)=>{
  setToken(token);
  localStorage.setItem('token',token);
}
const logoutHandler=()=>{
setToken(null);
localStorage.removeItem('token');
}
  const  contextObject={
       token:token,
       isLoggedIn:userIsLoggedIn,
       login:loginHandler,
       logout:logoutHandler,

    };
    return(
        <AuthContext.Provider value={contextObject}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;