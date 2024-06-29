import React, { useState } from "react";
import { Container, Row, Col, Form, Alert, Button } from "react-bootstrap";

const ProfileForm = () => {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState(null);

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyADmXqIuQyG0nZ4Yeu7Hi13m2EP7oX6PfU",

      {
        method: "POST",
        body: JSON.stringify({
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          setEnteredPassword("");
        } else {
          return response.json().then((data) => {
            setError(" weak password.");
          });
        }
      })
      .catch(() => {
        setError("An error occurred. Please try again.");
      });
  };

  return (
    <>
      <Container className="mt-5 mb-5">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2>Login </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter six digit password"
                  name="password"
                  value={enteredPassword}
                  onChange={passwordHandler}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Change Password
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfileForm;
