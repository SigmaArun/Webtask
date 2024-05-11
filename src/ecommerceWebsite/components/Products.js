import React from "react";
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

const Products=()=>{

    const productsArr = [

        {
        
        title: 'English Songs',
        
        price: 1,
        
        imageUrl: 'https://github.com/SigmaArun/Webtask/blob/main/hollywood1.jpg?raw=true',
        
        },
        
        {
        
        title: 'Instrumental',
        
        price: 2,
        
        imageUrl: 'https://github.com/SigmaArun/Webtask/blob/main/instrumental.jpg?raw=true',
        
        },
        
        {
        
        title: 'Bollywood',
        
        price: 3,
        
        imageUrl: 'https://github.com/SigmaArun/Webtask/blob/main/bollywood.jpeg?raw=true',
        
        },
        
        {
        
        title: 'Tamil songs',
        
        price: 1,
        
        imageUrl: 'https://github.com/SigmaArun/Webtask/blob/main/tamil.jpg?raw=true',
        
        }
        
        ]

         
    return(
        <>
                <section>
                <h2 className="text-center">Music</h2>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        {productsArr.map((item, index) => (
                            <div key={index} className="col-md-6 mb-3 d-flex justify-content-center">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={item.imageUrl} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            <span>  {item.price}$</span>
                                          
                                        </Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
     
       </>
    )
}
export default Products;