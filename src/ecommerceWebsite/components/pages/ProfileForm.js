import React, { useState,useContext } from "react";
import { Container, Row, Col, Form, Alert, Button } from "react-bootstrap";
import AuthContext from "../store/AuthContext";

const ProfileForm = () => {

    const authCtx=useContext(AuthContext);
  const [enteredNewPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState(null);

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyADmXqIuQyG0nZ4Yeu7Hi13m2EP7oX6PfU",

      {
        method: "POST",
        body: JSON.stringify({
            idToken:authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
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
            <h2>User can  Change password </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter six digit password"
                  name="password"
                  value={enteredNewPassword}
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
