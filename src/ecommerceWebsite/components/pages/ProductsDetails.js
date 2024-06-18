import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();

  // Mock data - In a real application, you might fetch the product details from an API
  const productsArr = [
    {
        id: 1,
        title: "English Songs",
        price: 1,
        imageUrl: "https://github.com/SigmaArun/Webtask/blob/main/hollywood1.jpg?raw=true",
        description: "A collection of popular English songs.",
        category: "Music",
      },
      {
        id: 2,
        title: "Instrumental",
        price: 2,
        imageUrl: "https://github.com/SigmaArun/Webtask/blob/main/instrumental.jpg?raw=true",
        description: "Soothing instrumental music.",
        category: "Music",
      },
      {
        id: 3,
        title: "Bollywood",
        price: 3,
        imageUrl: "https://github.com/SigmaArun/Webtask/blob/main/bollywood.jpeg?raw=true",
        description: "Top Bollywood hits.",
        category: "Music",
      },
      {
        id: 4,
        title: "Tamil Songs",
        price: 1,
        imageUrl: "https://github.com/SigmaArun/Webtask/blob/main/tamil.jpg?raw=true",
        description: "Popular Tamil songs.",
        category: "Music",
      },
  ];

  const product = productsArr.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
     <Container>
    <div>
      <h2>{product.title}</h2>
      <img src={product.imageUrl} alt={product.title} style={{ width: '300px' }} />
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <p>Category: {product.category}</p>
    </div>
    </Container>
  );
};

export default ProductDetails;
