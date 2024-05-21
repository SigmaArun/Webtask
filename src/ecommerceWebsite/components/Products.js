import React from "react";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import CartContext from "./store/CartContext";

const Products = () => {
  const cartCtx = useContext(CartContext);
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
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Products;
