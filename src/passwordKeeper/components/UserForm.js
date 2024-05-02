import { useContext } from "react";
import classes from "./UserForm.module.css";
import PasswordContext from "../store/password-context";


const UserForm = () => {

    const usePassword=useContext(PasswordContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const password = event.target.elements.password.value;
    
     const item={
        title:title,
        password:password,
     }
     usePassword.addItem(item);
     usePassword.handleProduct();

  };

  const closeFormhandler=()=>{
    usePassword.closeForm();
  }

  return (
    <div>
      <div className={classes.form}>
        <form onSubmit={submitHandler}>
          <label>Title :</label>
          <input type="text" name="title" required></input>
          <label>Password:</label>
          <input type="text" name="password" required></input>

          <button type="submit">Add</button>
          <button onClick={closeFormhandler}>X</button>
        </form>
      </div>
    </div>
  );
};
export default UserForm;
