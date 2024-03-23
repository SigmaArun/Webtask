import { useState,useEffect } from "react";
import CartContext from "./cart-context";


const CartProvider=(props)=>{
    const [items,setItems]=useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const total = items.reduce((acc, item) => {
            return acc + item.amount * item.price; 
        }, 0);
        setTotalAmount(total);
    }, [items]);

    const addItemToCartHandler=(item)=>{
        setItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
      
            if (existingItemIndex !== -1) {
              const updatedItems = [...prevItems];
              updatedItems[existingItemIndex].amount += item.amount;
              return updatedItems;
            } else {
              return [...prevItems, item];
            }
          });
    };

    const removeItemFromCartHandler=(id)=>{
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };
     
        const cartContext={   
            items:items,
            totalAmount:totalAmount,
            addItem:addItemToCartHandler ,
            removeItem:removeItemFromCartHandler
        };
    
    return<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider; 