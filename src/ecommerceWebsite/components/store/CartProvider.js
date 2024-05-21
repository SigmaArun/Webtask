import React from "react";
import CartContext from "./CartContext";
import { useState } from "react";

const CartProvider = (props) => {
  const [isOpenCart, setOpenCart] = useState(false);
  const [items, setItems] = useState([]);
  //const [totalAmount, setTotalAmount] = useState(0);

 

  const openCartHandler = () => {
    setOpenCart(true);
  };
  const closeCartHandler = () => {
    setOpenCart(false);
  };
  const addItemToCart=(item)=>{
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return updatedItems;
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };
  

  const removeItemHandler = (id) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.id === id);
      const existingItem = prevItems[existingItemIndex];
      if (existingItem.quantity === 1) {
        return prevItems.filter((item) => item.id !== id);
      }
      const updatedItems = [...prevItems];
      updatedItems[existingItemIndex] = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      return updatedItems;
    });
  };
  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const contextObject = {
    items: items,
   
    isOpenCart,
    totalAmount: totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemHandler,
    openCart:openCartHandler,
    closeCart:closeCartHandler,
  };
  return (
    <CartContext.Provider value={contextObject}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
