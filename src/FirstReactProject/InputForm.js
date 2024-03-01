import "./InputForm.css";
import Card from "./Card";
import React, { useState } from "react";
import ErrorModel from "./ErrorModel";
import Wrapper from "./Helpers/Wrapper";
const InputForm = (props) => {
  const [enterdUsername, setEnteredUsername] = useState("");
  const [enterdAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const submitForm = (event) => {
    event.preventDefault();
    if (enterdUsername.trim().length === 0 || enterdAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age(non empty value)",
      });
      return;
    }
    if (+enterdAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0). ",
      });
      return;
    }
    props.onAddUser(enterdUsername, enterdAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModel>
      )}

      <Card className="input">
        <form className="input" onSubmit={submitForm}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enterdUsername}
            onChange={usernameChangeHandler}
          ></input>

          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            id="age"
            value={enterdAge}
            onChange={ageChangeHandler}
          ></input>

          <button style={{ background: "purple" }} type="submit">
            Add User
          </button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default InputForm;
