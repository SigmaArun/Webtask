import PasswordContext from "./password-context";
import React, { useState ,useEffect} from "react";

const PasswordProvider = (props) => {
    const[items,setItem]=useState([]);
    //  const totalQuantity = items.reduce((acc, item) => acc + item.amount, 0);
 
  const [showForm, setShowForm] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
    
  useEffect(() => {
    setTotalQuantity(items.length);
    
  }, [items]);

  console.log(totalQuantity);

  const handleForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleProduct=()=>{
    setOpenProduct(true);
  }

   const itemHandler=(item)=>{
    console.log(item);
    setItem((prevItem)=> [...prevItem,item])
  
   
   }



  const passwordContext = {
    item:items,
    showForm,
     addItem: itemHandler,
    totalQuantity,
     openProduct,
    handleForm,
    closeForm,
    handleProduct,
   
  };

  return (
    <PasswordContext.Provider value={passwordContext}>
      {props.children}
    </PasswordContext.Provider>
  );
};
export default PasswordProvider;
