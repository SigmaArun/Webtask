import { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = () => {
  const [cartIsOpen, setCartIsOpen] = useState("true");

  
  const closeCartHandler = () => {
    setCartIsOpen(false);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: 1, name: "AAloo paratha", amount: 2, price: 100 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <>
      {cartIsOpen && (
        <Modal>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>₹ 200</span>
          </div>
          <div className={classes.actions}>
            <button
              className={classes["button--alt"]}
              onClick={closeCartHandler}
            >
              Close
            </button>
            <button className={classes.button}>Order</button>
          </div>
        </Modal>
      )}
    </>
  );
};
export default Cart;
