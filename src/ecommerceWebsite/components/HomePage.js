import React from "react";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";


const HomePage = () => {

  return (
   <>
      <Header></Header>
      <Products></Products>
    
   
      <Container>
        <div className="d-flex justify-content-center my-3">
          <Button variant="secondary" size="lg">
            Click to go to Cart
          </Button>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};
export default HomePage;
