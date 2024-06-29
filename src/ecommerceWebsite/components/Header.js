import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./Header.css";
import { useContext } from "react";
import CartContext from './store/CartContext';
import { NavLink} from "react-router-dom";
import AuthContext from "./store/AuthContext";


const Header = () => {
  const cartCtx = useContext(CartContext); 
  const authCtx=useContext(AuthContext);

  const handler = () => {
    cartCtx.openCart();
  };

  const logoutHandler=()=>{
    authCtx.logout();
  }

  const totalItems = cartCtx.items.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <Navbar className="navbar-fixed" bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="mx-auto">
             
            <NavLink to="/home" className="nav-link" activeClassName="active">HOME</NavLink>
            <NavLink to="/store" className="nav-link" activeClassName="active">STORE</NavLink>
            <NavLink to="/about" className="nav-link">ABOUT</NavLink>
            <NavLink to="/contact" className="nav-link">CONTACT US</NavLink>
             {  authCtx.isLoggedIn &&
            <NavLink to="/profile" className="nav-link">Profile</NavLink>
             }
          </Nav>
          <NavLink to="/signup" className="nav-link">
            <Button variant="primary">SignUp</Button>
          </NavLink>
          
          { !authCtx.isLoggedIn && (
          <NavLink to="/login" className="nav-link">
            <Button variant="primary">Login</Button>
          </NavLink>
                      )}

             {authCtx.isLoggedIn && (
            <NavLink to="/logout" className="nav-link">
              <Button onClick={logoutHandler}>Logout</Button>
            </NavLink>
          )}
          
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
