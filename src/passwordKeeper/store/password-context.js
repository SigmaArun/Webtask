import React from "react";

const PasswordContext = React.createContext({
  totalQuantity: 0,
  addItem:(item)=>{},
  showForm: false,
  handleForm: () => {},
  closeForm: () => {},
  handleProduct:()=>{},
  openProduct:false,
  item:[],
});
export default PasswordContext;
