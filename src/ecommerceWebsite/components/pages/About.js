import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container fluid className="about-container">
      <section className="section">
     
        <p>
          Welcome to The GENERICS! We are a passionate group of music enthusiasts dedicated to bringing the best music experience to our fans. Our journey started in 2020, and since then, we have been committed to creating memorable music and unforgettable live performances.
        </p>
        <p>
          Our mission is to connect with our audience through our music, bringing joy, excitement, and a sense of community. We believe in the power of music to bring people together, and we strive to deliver that experience in every concert and album we produce.
        </p>
        <p>
          Thank you for being a part of our journey. We look forward to seeing you at our next event!
        </p>
      </section>
    </Container>
  );
};

export default About;
