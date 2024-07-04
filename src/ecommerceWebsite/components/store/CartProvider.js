import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CartContext from "./CartContext";
import AuthContext from "./AuthContext";

const CartProvider = (props) => {
  const [isOpenCart, setOpenCart] = useState(false);
  const [items, setItems] = useState([]);
  const authCtx = useContext(AuthContext);

  const sanitizeEmail = (email) => {
    return email.replace(/[@.]/g, "");
  };

  useEffect(() => {
    if (authCtx.userEmail) {
      fetchCartItems(authCtx.userEmail);
    }
  }, [authCtx.userEmail]);

  const fetchCartItems = async (email) => {
    const sanitizedEmail = sanitizeEmail(email);
    try {
      const response = await axios.get(`https://crudcrud.com/api/07b2401bfc4c4ddf950e1671f7eb99b8/cart${sanitizedEmail}`);
      const fetchedItems = response.data.map(item => ({
        ...item,
        quantity: item.quantity || 1 
      }));
      setItems(fetchedItems);
    } catch (error) {
      console.error('Failed to fetch cart items', error);
    }
  };

  const openCartHandler = () => {
    setOpenCart(true);
  };

  const closeCartHandler = () => {
    setOpenCart(false);
  };

  const addItemToCart = async (item) => {
    const sanitizedEmail = sanitizeEmail(authCtx.userEmail);
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

    try {
      await axios.post(`https://crudcrud.com/api/07b2401bfc4c4ddf950e1671f7eb99b8/cart${sanitizedEmail}`, item);
    } catch (error) {
      console.error('Failed to add item to cart', error);
    }
  };

  const removeItemHandler = async (id) => {
    const sanitizedEmail = sanitizeEmail(authCtx.userEmail);
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.id === id);
      const existingItem = prevItems[existingItemIndex];
      if (existingItem.quantity === 1) {
        deleteItemFromApi(id, sanitizedEmail);
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

  const deleteItemFromApi = async (itemId, email) => {
    try {
      const response = await axios.get(`https://crudcrud.com/api/07b2401bfc4c4ddf950e1671f7eb99b8/cart${email}`);
      const itemToDelete = response.data.find((item) => item.id === itemId);
      if (itemToDelete) {
        await axios.delete(`https://crudcrud.com/api/07b2401bfc4c4ddf950e1671f7eb99b8/cart${email}/${itemToDelete._id}`);
      }
    } catch (error) {
      console.error('Failed to delete item from cart', error);
    }
  };

  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const contextObject = {
    items: items,
    isOpenCart,
    totalAmount: totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemHandler,
    openCart: openCartHandler,
    closeCart: closeCartHandler,
  };

  return (
    <CartContext.Provider value={contextObject}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
