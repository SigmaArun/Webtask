import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./Header.css";
import { useContext } from "react";
import CartContext from './store/CartContext';
import { NavLink} from "react-router-dom";


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
          <Nav className="mx-auto">
             
            <NavLink to="/home" className="nav-link">HOME</NavLink>
            <NavLink to="/store" className="nav-link">STORE</NavLink>
            <NavLink to="/about" className="nav-link">ABOUT</NavLink>
          </Nav>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button onClick={handler}>Cart</Button>
            <span style={{ marginLeft: "5px", color: "white" }}>{totalItems}</span>
          </div>
        </Container>
      </Navbar>
       <Container fluid className="p-0">
      <section className="section"> 
        <h1>The GENERICS</h1>
      </section>
      </Container>
    </>
  );
};
export default Header;
