import { Button, Container } from "react-bootstrap";
import Modal from "./UI/Modal";
import React, { Fragment } from "react";
import "./Cart.css";
import { useContext } from "react";
import CartContext from "./store/CartContext";
const Cart = () => {
  const cartCtx = useContext(CartContext);

  const cartHandler = () => {
    cartCtx.closeCart();
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

 // const totalAmount = cartCtx.items.reduce((total, item) => total + item.price, 0);


  return (
    <>
        {cartCtx.isOpenCart && (
        <Modal>
          <Container>
            <div className="cartLayout">
              <div>
                <Button onClick={cartHandler} style={{ marginLeft: "0px" }}>
                  X
                </Button>
              </div>
              <div>
                <h2>Cart</h2>
              </div>

              <div className="cartItems">
                <div className="div1">ITEM</div>
                <div className="div2">PRICE</div>
                <div className="div3">QUANTITY</div>
              </div>

              {cartCtx.items.map((item) => (
                <div key={item.id} className="cartItems">
                  <div className="div1">
                    <div className="productItem">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="productImage"
                      />
                      <span> {item.title}</span>
                    </div>
                  </div>
                  <div className="div2"> ${item.price}</div>
                  <div className="div3">
                    <span className="quantspan">{item.quantity}</span>
                    <Button 
                      variant="danger" 
                      onClick={() => removeItemHandler(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}

              <div className="totaldiv">
                <span>Total :</span>
                <span>${cartCtx.totalAmount.toFixed(2)}</span>
              </div>
              <div className="purchaseButton">
                <Button variant="primary" size="lg">
                  Purchase
                </Button>
              </div>
            </div>
          </Container>
        </Modal>
      )}
    
    </>
  );
};
export default Cart;
