import React, { useState } from "react";

import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Contact=()=>{

  const[enterName,setName]=  useState("");
   const[email,setEmail]= useState("");
   const[phone,setPhone]= useState("");  

   const nameHandler=(event)=>{
    setName(event.target.value);
   }
   const emailHandler=(event)=>{
    setEmail(event.target.value);
   }
   const phoneHandler=(event)=>{
    setPhone(event.target.value);
   }
     
   const handleSubmit = async (event) => {
    event.preventDefault();

    const contactData = {
      userName: enterName,
      emailId: email,
      phone: phone,
    };

    try {
      const response = await fetch('https://akecommerce-app-default-rtdb.firebaseio.com/userData.json', {
        method: 'POST',
        body: JSON.stringify(contactData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to add user');
      }

    
      setName('');
      setEmail('');
      setPhone('');

      alert('User added successfully!');

    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add user');
    }
  };
 
    return(
        <Container className="mt-5 mb-5">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2>User Form</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={enterName}
                  onChange={nameHandler}
                />
              </Form.Group>
  
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={emailHandler}
                />
              </Form.Group>
  
              <Form.Group controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={phone}
                  onChange={phoneHandler}
                />
              </Form.Group>
  
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
}
export default Contact;