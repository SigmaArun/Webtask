import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const SignUpForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    // post request auth
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyADmXqIuQyG0nZ4Yeu7Hi13m2EP7oX6PfU",

      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        setIsLoading(false);
        if (response.ok) {
          setEnteredEmail("");
          setEnteredPassword("");
        } else {
          return response.json().then((data) => {
            setError("Email already exists or weak password.");
          });
        }
      })
      .catch(() => {
        setIsLoading(false);
        setError("An error occurred. Please try again.");
      });
  };
  return (
    <>
      <Container className="mt-5 mb-5">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2>SignUp Form</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={enteredEmail}
                  onChange={emailHandler}
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter six digit password"
                  name="password"
                  value={enteredPassword}
                  onChange={passwordHandler}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                {isLoading ? "sendingRequest..." : "SignUp"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SignUpForm;
