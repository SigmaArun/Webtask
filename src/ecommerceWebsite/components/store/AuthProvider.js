import React, { useState } from "react";
import AuthContext from "./AuthContext";


const AuthProvider=(props)=>{

const [token,setToken]=useState(null);

const userIsLoggedIn=!!token;

const loginHandler=(token)=>{
  setToken(token);
}
const logoutHandler=()=>{
setToken(null);
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