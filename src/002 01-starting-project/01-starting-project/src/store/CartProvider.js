import { useState, useEffect } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = items.reduce((acc, item) => {
      return acc + item.amount * item.price;
    }, 0);
    setTotalAmount(total);
  }, [items]);

  const addItemToCartHandler = (item) => {
    const existingItemIndex = items.findIndex((i) => i.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].amount += 1;
      setItems(updatedItems);
      setTotalAmount((prevTotalAmount) => prevTotalAmount + item.price);
    } else {
      setItems((prevItems) => [...prevItems, { ...item, amount: 1 }]);
      setTotalAmount((prevTotalAmount) => prevTotalAmount + item.price);
    }
  };

  const removeItemFromCartHandler = (id) => {
    // setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    const itemIndex = items.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      return;
    }

    const existingItem = items[itemIndex];

    if (existingItem.amount === 1) {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } else {
      const updatedItems = [...items];
      updatedItems[itemIndex] = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      setItems(updatedItems);
    }

    const amountToRemove = existingItem.price;

    setTotalAmount((prevTotalAmount) => prevTotalAmount - amountToRemove);
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
