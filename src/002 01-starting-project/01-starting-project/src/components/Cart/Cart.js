import { useState,useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = () => {
  const [cartIsOpen, setCartIsOpen] = useState(true);

  const cartCtx = useContext(CartContext);
  
  const closeCartHandler = () => {
    setCartIsOpen(false);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
             {item.amount} {item.name}</li>
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
            <span>₹  {cartCtx.totalAmount.toFixed(2)}</span>
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
