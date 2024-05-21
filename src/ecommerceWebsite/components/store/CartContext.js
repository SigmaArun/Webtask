import React from "react";

const CartContext = React.createContext({
    items: [],
    
    isOpenCart:false,
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{ },
    openCart:()=>{},
    closeCart:()=>{},
});
export default CartContext;
