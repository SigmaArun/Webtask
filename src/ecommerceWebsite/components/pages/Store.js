import React from "react";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import CartContext from "../store/CartContext";
import { Container } from "react-bootstrap";
import './Store.css';
import { useNavigate } from 'react-router-dom';
 
const Store = () => {

  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  const cartHandler = () => {
    cartCtx.openCart();
  };

  const productsArr = [
    {
       id:1,
      title: "English Songs",

      price: 1,

      imageUrl:
        "https://github.com/SigmaArun/Webtask/blob/main/hollywood1.jpg?raw=true",
    },

    {
        id:2,
      title: "Instrumental",

      price: 2,

      imageUrl:
        "https://github.com/SigmaArun/Webtask/blob/main/instrumental.jpg?raw=true",
    },

    { 
      id:3,
      title: "Bollywood",

      price: 3,

      imageUrl:
        "https://github.com/SigmaArun/Webtask/blob/main/bollywood.jpeg?raw=true",
    },

    {
      id:4,
      title: "Tamil songs",

      price: 1,

      imageUrl:
        "https://github.com/SigmaArun/Webtask/blob/main/tamil.jpg?raw=true",
    },
  ];
  const addItemToCartHandler = (items) => {
    cartCtx.addItem(items);
  };

   const productDetailsHandler=(id)=>{
    navigate(`/store/products/${id}`);
   }

  return (
    <>
      <section>
        <h2 className="text-center">Music</h2>
        <div className="d-flex justify-content-center">
          <div className="row">
            {productsArr.map((item) => (
              <div
                key={item.id}
                className="col-md-6 mb-3 d-flex justify-content-center"
              >
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      <span> {item.price}$</span>
                    </Card.Text>
                    <Button
                      onClick={()=>addItemToCartHandler(item)}
                      variant="primary"
                    >
                      Add to Cart
                    </Button>
                    <Button 
                    onClick={()=>productDetailsHandler(item.id)}
                    variant="secondary" >
                      See Details
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Container>
        <div className="d-flex justify-content-center my-3">
          <Button variant="secondary" size="lg" onClick={() => cartHandler()}>
            Click to go to Cart
          </Button>
        </div>
      </Container>
    </>
  );
};
export default Store;
