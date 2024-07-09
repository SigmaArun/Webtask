import React from "react";

const AuthContext=React.createContext({
    token:'',
    userEmail: '',
    isLoggedIn:false,
    login:(token,email)=>{},
    logout:(callback)=>{},
});
export default AuthContext;