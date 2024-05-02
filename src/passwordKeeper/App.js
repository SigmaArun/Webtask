import React, { useContext } from "react";
import AddPassword from "./components/AddPassword";
import PasswordProvider from "./store/PasswordProvider";
import "./App.css";
import SavedPassword from "./components/SavedPassword";
import PasswordContext from "./store/password-context";

const App = () => {
  const usePassword = useContext(PasswordContext);
  console.log("Total passwords in App:", usePassword.totalQuantity);
  return (
    <div>
      <div className="app">
        <h2>Password Keeper </h2>
        <PasswordProvider>
       
          <AddPassword></AddPassword>
           <SavedPassword></SavedPassword>
        </PasswordProvider>
      </div>
    </div>
  );
};
export default App;
