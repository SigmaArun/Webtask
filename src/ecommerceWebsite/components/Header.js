import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">STORE</Nav.Link>
            <Nav.Link href="#pricing">ABOUT</Nav.Link>
          </Nav>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button>Cart</Button>
            <span style={{ marginLeft: "5px", color: "white" }}>1</span>
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
