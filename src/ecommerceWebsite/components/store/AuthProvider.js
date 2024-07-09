import React, { useState } from "react";
import AuthContext from "./AuthContext";
import { useHistory } from 'react-router-dom';


const AuthProvider=(props)=>{
  const initialToken=localStorage.getItem('token');
  const initialEmail = localStorage.getItem('email');

const [token,setToken]=useState(initialToken);
const [userEmail, setUserEmail] = useState(initialEmail);
const history = useHistory();


const userIsLoggedIn=!!token;

const loginHandler=(token,email)=>{
  setToken(token);
  setUserEmail(email);
  localStorage.setItem('token',token);
  localStorage.setItem('email', email);
}
const logoutHandler=(callback)=>{
setToken(null);
setUserEmail(null);
localStorage.removeItem('token');
localStorage.removeItem('email');
callback();

}
  const  contextObject={
       token:token,
       userEmail: userEmail,
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