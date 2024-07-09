import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./Header.css";
import { useContext } from "react";
import CartContext from './store/CartContext';
import { NavLink} from "react-router-dom";
import AuthContext from "./store/AuthContext";
 import { useHistory } from 'react-router-dom';



const Header = () => {
  const cartCtx = useContext(CartContext); 
  const authCtx=useContext(AuthContext);
   const history = useHistory();
 

  const handler = () => {
    cartCtx.openCart();
  };

  // const logoutHandler=()=>{
  //   authCtx.logout(history.push);
  // }
  const logoutHandler = () => {
    authCtx.logout(() => {
        history.push('/Webtask/home'); 
     
    });
};

  const totalItems = cartCtx.items.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <Navbar className="navbar-fixed" bg="dark"  expand="md"   variant="dark">

        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
             
            <NavLink to="/Webtask/home" className="nav-link" activeClassName="active">HOME</NavLink>
            <NavLink to="/Webtask/store" className="nav-link" activeClassName="active">STORE</NavLink>
            <NavLink to="/Webtask/about" className="nav-link">ABOUT</NavLink>
            <NavLink to="/Webtask/contact" className="nav-link">CONTACT US</NavLink>
             {  authCtx.isLoggedIn &&
            <NavLink to="/Webtask/profile" className="nav-link">Profile</NavLink>
             }
          </Nav>
          <Nav className="mx-auto">
          <NavLink to="/Webtask/signup" className="nav-link">
            <Button variant="primary">SignUp</Button>
          </NavLink>
          
          { !authCtx.isLoggedIn && (
          <NavLink to="/Webtask/login" className="nav-link">
            <Button variant="primary">Login</Button>
          </NavLink>
                      )}

             {authCtx.isLoggedIn && (
            <NavLink to="/Webtask/logout" className="nav-link">
              <Button onClick={logoutHandler}>Logout</Button>
            </NavLink>
          )}
          
          <div style={{ display: "flex", alignItems: "center" }}>
          <NavLink to="/Webtask/cart" className="nav-link">
            <Button onClick={handler}>Cart</Button>
            </NavLink>
            <span style={{ marginLeft: "5px", color: "white" }}>{totalItems}</span>
          </div>
          </Nav>
          </Navbar.Collapse>
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
