import React, { useContext } from "react";
import Modal from '../UI/Modal';
import UserForm from "./UserForm";
import PasswordContext from "../store/password-context";
import './AddPassword.css';


const AddPassword=()=>{
   
    const usePassword=useContext(PasswordContext);

    const handler=()=>{
       usePassword.handleForm();
    }

    return(
        <div>
            <div>
            <span>Total passwords: {usePassword.totalQuantity}</span>
            </div>
        <div className="passwordBt">
            <button onClick={handler}>Add New Password </button>
        </div>
        {usePassword.showForm&& (
            <Modal >
              <UserForm />
            </Modal>
          )}
          </div>
    )
}
export default AddPassword;