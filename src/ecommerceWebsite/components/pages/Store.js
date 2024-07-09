import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CartContext from "../store/CartContext";
import { Container } from "react-bootstrap";
import './Store.css';
import { useHistory } from 'react-router-dom';
import hollywoodImage from "../images/storeimages/hollywood.jpeg";
import instrumentalImage from "../images/storeimages/instrumental.jpeg";
import bollywoodImage from "../images/storeimages/bollywood.jpeg";
import tamilImage from "../images/storeimages/tamil.jpeg";


const Store = () => {

  const cartCtx = useContext(CartContext);
  const history = useHistory();

  const cartHandler = () => {
    cartCtx.openCart();
  };

  const productsArr = [
    {
       id: 1,
      title: "English Songs",
      price: 1,
      imageUrl: hollywoodImage,
    },
    {
        id: 2,
      title: "Instrumental",
      price: 2,
      imageUrl: instrumentalImage,
    },
    { 
      id: 3,
      title: "Bollywood",
      price: 3,
      imageUrl: bollywoodImage,
    },
    {
      id: 4,
      title: "Tamil songs",
      price: 1,
      imageUrl: tamilImage,
    },
  ];

  const addItemToCartHandler = (item) => {
    cartCtx.addItem(item);
  };

  const productDetailsHandler = (id) => {
    history.push(`/store/products/${id}`);
  };

  return (
    <>
    <Container>
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
                      <span>{item.price}$</span>
                    </Card.Text>
                    <Button
                      onClick={() => addItemToCartHandler(item)}
                      variant="primary"
                    >
                      Add to Cart
                    </Button>
                    <Button 
                      onClick={() => productDetailsHandler(item.id)}
                      variant="secondary"
                    >
                      See Details
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Container>
      <Container>
        <div className="d-flex justify-content-center my-3">
          <Button variant="secondary" size="lg" onClick={cartHandler}>
            Click to go to Cart
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Store;
