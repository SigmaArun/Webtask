import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./Header.css";
import { useContext } from "react";
import CartContext from './store/CartContext';

const Header = () => {
  const cartCtx = useContext(CartContext);

  const handler = () => {
    cartCtx.openCart();
  };

  const totalItems = cartCtx.items.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <Navbar className="navbar-fixed" bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">STORE</Nav.Link>
            <Nav.Link href="#pricing">ABOUT</Nav.Link>
          </Nav>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button onClick={handler}>Cart</Button>
            <span style={{ marginLeft: "5px", color: "white" }}>{totalItems}</span>
          </div>
        </Container>
      </Navbar>

      <section className="section">
        <h1>The GENERICS</h1>
      </section>
    </>
  );
};
export default Header;
