import React, { useState,  useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if(action.type==='USER_INPUT'){
    return { value: action.val, isValid: action.val.includes('@')};
  }
  if(action.type==='INPUT_BLUR'){
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: "", isValid: false };
};

 // for password useReducer

 const passwordReducer = (state, action) => {
  if(action.type==='USER_INPUT'){
    return { value: action.val, isValid: action.val.trim().length>6};
  }
  if(action.type==='INPUT_BLUR'){
    return { value: state.value, isValid: state.value.trim().length >6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [enteredCollege, setEnteredCollege] = useState("");
  const [collegeIsValid, setCollegeIsValid] = useState();

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: undefined,
  });
  
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: undefined,
  });
    
  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     setFormIsValid(
  //       enteredEmail.includes("@") &&
  //         enteredPassword.trim().length > 6 &&
  //         enteredCollege.trim().length > 2
  //     );
  //   }, 500);
  //   return () => {
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword, enteredCollege]);

  const emailChangeHandler = (event) => {
     dispatchEmail({type: 'USER_INPUT',val: event.target.value});
    //setEnteredEmail(event.target.value);
  };

  const collegeChangeHandler = (event) => {
    setEnteredCollege(event.target.value);
    setFormIsValid(
      emailState.isValid && event.target.value.trim().length >3
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT',val: event.target.value});
   // setEnteredPassword(event.target.value);
    setFormIsValid(
     emailState.isValid && event.target.value.trim().length >6 
    );
  };

  const validateEmailHandler = () => {
    //setEmailIsValid(emailState.isValid);
    dispatchEmail({type:'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
   // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type:'INPUT_BLUR'});
  };

  const validateCollegeHandler = () => {
    setCollegeIsValid(enteredCollege.trim().length > 2);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value, enteredCollege);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            collegeIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="college">College Name</label>
          <input
            type="text"
            id="college"
            value={enteredCollege}
            onChange={collegeChangeHandler}
            onBlur={validateCollegeHandler}
          ></input>
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
