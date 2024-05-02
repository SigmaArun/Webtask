import React, { useContext } from "react";
import PasswordContext from "../store/password-context";
const SavedPassword = () => {
  const usePassword = useContext(PasswordContext);

 

  const deleteItem = (id) => {
    const updatedItems = usePassword.item.filter((item) => item.id !== id);
    usePassword.addItem([updatedItems]);
  };

  return (
    <div>
      {usePassword.openProduct && (
        <ul>
          {usePassword.item.map((item) => (
            <li key={item.id} style={{ display: "flex" }}>
              <p>Title: {item.title}</p>
              <p> Password :{item.password}</p>

              <button
                style={{ cursor: "pointer" }}
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </button>
              <button>Edit</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default SavedPassword;
