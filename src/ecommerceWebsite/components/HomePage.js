import React from "react";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer";
import Button from 'react-bootstrap/Button';
const HomePage=()=>{
    return(
        <>
         <Header></Header>
         <Products></Products>
         <div className="d-flex justify-content-center my-3">
                <Button variant="secondary" size="lg">
                    Click to go to Cart
                </Button>
            </div>
         <Footer></Footer>
        </>
    )
}
export default HomePage;