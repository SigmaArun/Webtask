import { useState, useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = () => {
  const [cartIsOpen, setCartIsOpen] = useState(true);

  const cartCtx = useContext(CartContext);

  const closeCartHandler = () => {
    setCartIsOpen(false);
  };

  const deleteItemHandler = (itemId) => {
    cartCtx.removeItem(itemId);
  };

  const addItemHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          <div className={classes.amountBox}>x{item.amount}</div>
          <div> {item.name} </div>
          <div className={classes.buttonDiv}>
            <button
              className={classes.deleteButton}
              onClick={() => deleteItemHandler(item.id)}
            >
              -
            </button>
            <button
              className={classes.addButton}
              onClick={() => addItemHandler(item)}
            >
              +
            </button>
          </div>
        </li>
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
            <span>₹ {cartCtx.totalAmount.toFixed(2)}</span>
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
